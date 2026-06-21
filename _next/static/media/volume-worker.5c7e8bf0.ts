/**
 * Web Worker: IDW interpolation → 3D RGBA voxel grid.
 *
 * Outputs pre-colored RGBA data matching the 2D contour color scheme,
 * ready for direct sampling in the ray marching shader.
 */

export interface VolumePoint {
  x: number;
  y: number; // building-local X (east)
  z: number; // building-local Z (south)
  floor: number;
  value: number; // raw signal value
}

export interface CorridorBound {
  xRange: [number, number];
  zRange: [number, number];
}

export interface ColorBands {
  min: number;
  poorMax: number;
  fairMax: number;
  max: number;
}

export interface WorkerInput {
  points: VolumePoint[];
  resolution: [number, number, number]; // [nx, nFloors, nz]
  corridorBounds: CorridorBound[];
  xExtent: [number, number];
  zExtent: [number, number];
  numFloors: number;
  power?: number;
  colorBands: ColorBands;
  fullCoverage?: boolean;
}

export interface WorkerOutput {
  data: Uint8Array; // nx * nFloors * nz * 4 (RGBA)
  resolution: [number, number, number];
}

// 2D contour color scheme
const COLOR_POOR = [255, 0, 0];     // #FF0000
const COLOR_FAIR = [255, 255, 0];   // #FFFF00
const COLOR_GOOD = [0, 136, 0];     // #008800

const FADE_DIST = 2.0;

function corridorMask(x: number, z: number, bounds: CorridorBound[]): number {
  let best = 0;
  for (const b of bounds) {
    const dx = Math.min(x - b.xRange[0], b.xRange[1] - x);
    const dz = Math.min(z - b.zRange[0], b.zRange[1] - z);
    const inside = Math.min(dx, dz);
    const t = Math.max(0, Math.min(1, (inside + FADE_DIST) / FADE_DIST));
    const smooth = t * t * (3 - 2 * t);
    best = Math.max(best, smooth);
  }
  return best;
}

function idw(qx: number, qz: number, floorPoints: VolumePoint[], power: number): number {
  let numerator = 0;
  let denominator = 0;
  for (const p of floorPoints) {
    const dist = Math.sqrt((qx - p.y) ** 2 + (qz - p.z) ** 2);
    if (dist < 0.0001) return p.value;
    const weight = 1 / Math.pow(dist, power);
    numerator += weight * p.value;
    denominator += weight;
  }
  return denominator === 0 ? 0 : numerator / denominator;
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function signalToRGBA(value: number, bands: ColorBands, alpha: number): [number, number, number, number] {
  const { poorMax, fairMax } = bands;
  const range = bands.max - bands.min;
  const epsilon = range * 0.01;

  const poorToFair = smoothstep(poorMax - epsilon, poorMax + epsilon, value);
  const fairToGood = smoothstep(fairMax - epsilon, fairMax + epsilon, value);

  let r: number, g: number, b: number;
  if (poorToFair < 1) {
    r = lerp(COLOR_POOR[0], COLOR_FAIR[0], poorToFair);
    g = lerp(COLOR_POOR[1], COLOR_FAIR[1], poorToFair);
    b = lerp(COLOR_POOR[2], COLOR_FAIR[2], poorToFair);
  } else {
    r = lerp(COLOR_FAIR[0], COLOR_GOOD[0], fairToGood);
    g = lerp(COLOR_FAIR[1], COLOR_GOOD[1], fairToGood);
    b = lerp(COLOR_FAIR[2], COLOR_GOOD[2], fairToGood);
  }

  return [Math.round(r), Math.round(g), Math.round(b), Math.round(alpha * 255)];
}

self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const { points, resolution, corridorBounds, xExtent, zExtent, numFloors, power = 2, colorBands, fullCoverage = false } = event.data;
  const [nx, nFloors, nz] = resolution;
  const [xMin, xMax] = xExtent;
  const [zMin, zMax] = zExtent;

  // 4 bytes per voxel (RGBA)
  const data = new Uint8Array(nx * nFloors * nz * 4);

  const floorBuckets = new Map<number, VolumePoint[]>();
  for (const pt of points) {
    const bucket = floorBuckets.get(pt.floor) ?? [];
    bucket.push(pt);
    floorBuckets.set(pt.floor, bucket);
  }

  for (let iy = 0; iy < nFloors; iy++) {
    const floor = Math.round((iy / Math.max(nFloors - 1, 1)) * (numFloors - 1));
    const floorPts = floorBuckets.get(floor) ?? [];

    for (let iz = 0; iz < nz; iz++) {
      const worldZ = zMin + (iz / Math.max(nz - 1, 1)) * (zMax - zMin);

      for (let ix = 0; ix < nx; ix++) {
        const worldX = xMin + (ix / Math.max(nx - 1, 1)) * (xMax - xMin);
        const idx = (iz * nx * nFloors + iy * nx + ix) * 4;

        const mask = fullCoverage ? 1 : corridorMask(worldX, worldZ, corridorBounds);
        if (mask < 0.001 || floorPts.length === 0) {
          data[idx] = 0;
          data[idx + 1] = 0;
          data[idx + 2] = 0;
          data[idx + 3] = 0;
          continue;
        }

        const value = idw(worldX, worldZ, floorPts, power);
        if (isNaN(value)) {
          data[idx] = 0;
          data[idx + 1] = 0;
          data[idx + 2] = 0;
          data[idx + 3] = 0;
          continue;
        }

        const [r, g, b, a] = signalToRGBA(value, colorBands, mask);
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = a;
      }
    }
  }

  const output: WorkerOutput = { data, resolution };
  self.postMessage(output, { transfer: [data.buffer] });
};
