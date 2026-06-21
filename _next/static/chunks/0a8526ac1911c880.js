(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4220,e=>{"use strict";let t,n;var i=e.i(43476),r=e.i(932),a=e.i(75056),o=e.i(30297),s=e.i(43257),l=e.i(79353),d=e.i(90072),f=e.i(71645),c=e.i(44307),u=e.i(85654),p=e.i(59086),h=e.i(65332),m=e.i(71351);function v(e){return"rgb("+Math.max(0,Math.min(255,Math.round(34.61+(e=Math.max(0,Math.min(1,e)))*(1172.33-e*(10793.56-e*(33300.12-e*(38394.49-14825.05*e)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+e*(557.33+e*(1225.33-e*(3574.96-e*(1073.77+707.56*e)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+e*(3211.1-e*(15327.97-e*(27814-e*(22569.18-6838.66*e)))))))+")"}let y=new d.Object3D,g=new d.Color;function x(e){let t,n,a,o,s,l,d,x,S,w,b=(0,r.c)(23),{data:_,pointSize:E,opacity:A}=e,M=(0,f.useRef)(null);b[0]!==_?(n=1/0,t=-1/0,_.forEach(e=>{e.value<n&&(n=e.value),e.value>t&&(t=e.value)}),b[0]=_,b[1]=t,b[2]=n):(t=b[1],n=b[2]),b[3]!==t||b[4]!==n?(a={min:n,max:t},b[3]=t,b[4]=n,b[5]=a):a=b[5];let{min:L,max:U}=a;b[6]!==U||b[7]!==L?(o=(function e(){var t=(0,m.linearish)((function(){var e,t,n,i,r,a=0,o=1,s=p.identity,l=!1;function d(t){return null==t||isNaN(t*=1)?r:s(0===n?.5:(t=(i(t)-e)*n,l?Math.max(0,Math.min(1,t)):t))}function f(e){return function(t){var n,i;return arguments.length?([n,i]=t,s=e(n,i),d):[s(0),s(1)]}}return d.domain=function(r){return arguments.length?([a,o]=r,e=i(a*=1),t=i(o*=1),n=e===t?0:1/(t-e),d):[a,o]},d.clamp=function(e){return arguments.length?(l=!!e,d):l},d.interpolator=function(e){return arguments.length?(s=e,d):s},d.range=f(c.interpolate),d.rangeRound=f(u.interpolateRound),d.unknown=function(e){return arguments.length?(r=e,d):r},function(r){return i=r,e=r(a),t=r(o),n=e===t?0:1/(t-e),d}})()(p.identity));return t.copy=function(){return e().domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())},h.initInterpolator.apply(t,arguments)})().domain([L,U]).interpolator(v),b[6]=U,b[7]=L,b[8]=o):o=b[8];let B=o;return b[9]!==B||b[10]!==_?(s=()=>{M.current&&(M.current.count=_.length,_.forEach((e,t)=>{let{x:n,y:i,z:r}=e;y.position.set(n,i,r),y.scale.set(1,1,1),y.updateMatrix(),M.current.setMatrixAt(t,y.matrix);let a=B(e.value);g.set(a),M.current.setColorAt(t,g)}),M.current.instanceMatrix.needsUpdate=!0,M.current.instanceColor&&(M.current.instanceColor.needsUpdate=!0))},l=[_,B],b[9]=B,b[10]=_,b[11]=s,b[12]=l):(s=b[11],l=b[12]),(0,f.useLayoutEffect)(s,l),b[13]!==_.length?(d=[void 0,void 0,_.length],b[13]=_.length,b[14]=d):d=b[14],b[15]!==E?(x=(0,i.jsx)("sphereGeometry",{args:[E,16,16]}),b[15]=E,b[16]=x):x=b[16],b[17]!==A?(S=(0,i.jsx)("meshStandardMaterial",{color:"#ffffff",transparent:!0,opacity:A,roughness:.5,metalness:.1}),b[17]=A,b[18]=S):S=b[18],b[19]!==d||b[20]!==x||b[21]!==S?(w=(0,i.jsxs)("instancedMesh",{ref:M,args:d,frustumCulled:!1,children:[x,S]}),b[19]=d,b[20]=x,b[21]=S,b[22]=w):w=b[22],w}var S=e.i(99143),w=e.i(64515);function b(e){let t,n,a,o,s,l,f=(0,r.c)(16),{scale:c,x:u,z:p,rotation:h}=e;f[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,w.withBasePath)("/assets/floorplan.png"),f[0]=t):t=f[0];let m=(0,S.useLoader)(d.TextureLoader,t);f[1]!==u||f[2]!==p?(n=[u,-.2,p],f[1]=u,f[2]=p,f[3]=n):n=f[3];let v=Math.PI/180*h;f[4]!==v?(a=[-Math.PI/2,0,v],f[4]=v,f[5]=a):a=f[5];let y=c*(m.image.height/m.image.width);return f[6]!==c||f[7]!==y?(o=(0,i.jsx)("planeGeometry",{args:[c,y]}),f[6]=c,f[7]=y,f[8]=o):o=f[8],f[9]!==m?(s=(0,i.jsx)("meshBasicMaterial",{map:m,transparent:!0,opacity:.5,side:d.DoubleSide,depthWrite:!1}),f[9]=m,f[10]=s):s=f[10],f[11]!==n||f[12]!==a||f[13]!==o||f[14]!==s?(l=(0,i.jsxs)("mesh",{position:n,rotation:a,children:[o,s]}),f[11]=n,f[12]=a,f[13]=o,f[14]=s,f[15]=l):l=f[15],l}function _(e){let t,n,a,o,s,l,c,u,p,h,m,v,y,g,x,b,_,E=(0,r.c)(53),{width:A,depth:M,floors:L,floorHeight:U,wallOpacity:B}=e;E[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,w.withBasePath)("/assets/floorplan.png"),E[0]=t):t=E[0];let C=(0,S.useLoader)(d.TextureLoader,t),z=.2631472081218274,j=-.029296740994854353;C.offset.set(z,j),C.repeat.set(.9110355329949239-z,.4712864493996569-j);let O=A/2,D=M/2,P=U*L;if(E[1]!==D||E[2]!==O||E[3]!==P){let e=new d.Shape;e.moveTo(-O,-D),e.lineTo(O,-D),e.lineTo(O,D),e.lineTo(-O,D),e.closePath(),a=new d.ExtrudeGeometry(e,{depth:P,bevelEnabled:!1}),n=new d.EdgesGeometry(a),E[1]=D,E[2]=O,E[3]=P,E[4]=n,E[5]=a}else n=E[4],a=E[5];let T=n;E[6]!==T||E[7]!==a?(o={wallGeo:a,edgeGeo:T},E[6]=T,E[7]=a,E[8]=o):o=E[8];let{wallGeo:I,edgeGeo:R}=o;if(E[9]!==U||E[10]!==L||E[11]!==D||E[12]!==O||E[13]!==P){let e=[],t=D-6,n=O-6,i=O-19,r=i+6,a=(t,n,i,r,a,o)=>{e.push(t,n,i,r,a,o)};for(let e=0;e<=L;e++){let o=e*U;a(-O,o,-t,O,o,-t),a(-O,o,t,O,o,t),a(-n,o,-t,-n,o,t),a(n,o,-t,n,o,t),a(i,o,-t,i,o,t),a(r,o,-t,r,o,t);for(let e=-O+6;e<O;e+=6)a(e,o,-D,e,o,-t);for(let e=-O+6;e<O;e+=6)a(e,o,t,e,o,D);for(let e=-t+6;e<t;e+=6)a(-O,o,e,-n,o,e);for(let e=-t+6;e<t;e+=6)a(n,o,e,O,o,e);for(let e=-t+6;e<t;e+=6)a(i,o,e,r,o,e);a(-9,o,-7,9,o,-7),a(9,o,-7,9,o,7),a(9,o,7,-9,o,7),a(-9,o,7,-9,o,-7),a(-6,o,7,6,o,7),a(6,o,7,6,o,t),a(6,o,t,-6,o,t),a(-6,o,t,-6,o,7)}for(let[e,o]of[[-O,-t],[O,-t],[-O,t],[O,t],[-n,-t],[-n,t],[n,-t],[n,t],[i,-t],[i,t],[r,-t],[r,t],[-9,-7],[9,-7],[-9,7],[9,7],[-6,7],[6,7],[-6,t],[6,t]])a(e,0,o,e,P,o);(s=new d.BufferGeometry).setAttribute("position",new d.Float32BufferAttribute(e,3)),E[9]=U,E[10]=L,E[11]=D,E[12]=O,E[13]=P,E[14]=s}else s=E[14];let G=s;E[15]!==R||E[16]!==I||E[17]!==G?(l=()=>()=>{I.dispose(),R.dispose(),G.dispose()},c=[I,R,G],E[15]=R,E[16]=I,E[17]=G,E[18]=l,E[19]=c):(l=E[18],c=E[19]),(0,f.useEffect)(l,c),E[20]===Symbol.for("react.memo_cache_sentinel")?(u=[-Math.PI/2,0,0],E[20]=u):u=E[20],E[21]!==B?(p=(0,i.jsx)("meshPhysicalMaterial",{color:"#aaddff",transparent:!0,opacity:B,side:d.DoubleSide,roughness:.05,metalness:.1,envMapIntensity:.5}),E[21]=B,E[22]=p):p=E[22],E[23]!==p||E[24]!==I?(h=(0,i.jsx)("mesh",{geometry:I,rotation:u,children:p}),E[23]=p,E[24]=I,E[25]=h):h=E[25],E[26]===Symbol.for("react.memo_cache_sentinel")?(m=[-Math.PI/2,0,0],E[26]=m):m=E[26];let H=Math.min(2*B,1);E[27]!==H?(v=(0,i.jsx)("lineBasicMaterial",{color:"#5599bb",transparent:!0,opacity:H}),E[27]=H,E[28]=v):v=E[28],E[29]!==R||E[30]!==v?(y=(0,i.jsx)("lineSegments",{geometry:R,rotation:m,children:v}),E[29]=R,E[30]=v,E[31]=y):y=E[31];let V=Math.min(3*B,.6);if(E[32]!==V?(g=(0,i.jsx)("lineBasicMaterial",{color:"#88bbdd",transparent:!0,opacity:V}),E[32]=V,E[33]=g):g=E[33],E[34]!==g||E[35]!==G?(x=(0,i.jsx)("lineSegments",{geometry:G,children:g}),E[34]=g,E[35]=G,E[36]=x):x=E[36],E[37]!==M||E[38]!==U||E[39]!==L||E[40]!==C||E[41]!==A){let e;E[43]!==M||E[44]!==U||E[45]!==C||E[46]!==A?(e=(e,t)=>(0,i.jsxs)("mesh",{position:[0,t*U,0],rotation:[-Math.PI/2,0,0],children:[(0,i.jsx)("planeGeometry",{args:[A,M]}),(0,i.jsx)("meshBasicMaterial",{map:C,transparent:!0,opacity:0===t?.7:.35,side:d.DoubleSide,depthWrite:!1})]},t),E[43]=M,E[44]=U,E[45]=C,E[46]=A,E[47]=e):e=E[47],b=Array.from({length:L+1},e),E[37]=M,E[38]=U,E[39]=L,E[40]=C,E[41]=A,E[42]=b}else b=E[42];return E[48]!==y||E[49]!==x||E[50]!==b||E[51]!==h?(_=(0,i.jsxs)("group",{children:[h,y,x,b]}),E[48]=y,E[49]=x,E[50]=b,E[51]=h,E[52]=_):_=E[52],_}var E=e.i(31067),A=e.i(15080),M=d,L=d;let U=new L.Box3,B=new L.Vector3;class C extends L.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new L.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new L.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new L.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new L.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new L.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new L.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new L.InterleavedBufferAttribute(i,t,0)),this.setAttribute("instanceColorEnd",new L.InterleavedBufferAttribute(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new L.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new L.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),U.setFromBufferAttribute(t),this.boundingBox.union(U))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new L.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)B.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(B)),B.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(B));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var z=d,j=e.i(8560),O=e.i(31497);class D extends z.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:z.UniformsUtils.clone(z.UniformsUtils.merge([j.UniformsLib.common,j.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new z.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${O.version>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let P=O.version>=125?"uv1":"uv2",T=new M.Vector4,I=new M.Vector3,R=new M.Vector3,G=new M.Vector4,H=new M.Vector4,V=new M.Vector4,N=new M.Vector3,W=new M.Matrix4,F=new M.Line3,k=new M.Vector3,q=new M.Box3,K=new M.Sphere,J=new M.Vector4;function X(e,t,i){return J.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),J.multiplyScalar(1/J.w),J.x=n/i.width,J.y=n/i.height,J.applyMatrix4(e.projectionMatrixInverse),J.multiplyScalar(1/J.w),Math.abs(Math.max(J.x,J.y))}class $ extends M.Mesh{constructor(e=new C,t=new D({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,r=0,a=t.count;e<a;e++,r+=2)I.fromBufferAttribute(t,e),R.fromBufferAttribute(n,e),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+I.distanceTo(R);let r=new M.InstancedInterleavedBuffer(i,2,1);return e.setAttribute("instanceDistanceStart",new M.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new M.InterleavedBufferAttribute(r,1,1)),this}raycast(e,i){let r,a,o=this.material.worldUnits,s=e.camera;null!==s||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let d=this.matrixWorld,f=this.geometry,c=this.material;if(n=c.linewidth+l,null===f.boundingSphere&&f.computeBoundingSphere(),K.copy(f.boundingSphere).applyMatrix4(d),o)r=.5*n;else{let e=Math.max(s.near,K.distanceToPoint(t.origin));r=X(s,e,c.resolution)}if(K.radius+=r,!1!==t.intersectsSphere(K)){if(null===f.boundingBox&&f.computeBoundingBox(),q.copy(f.boundingBox).applyMatrix4(d),o)a=.5*n;else{let e=Math.max(s.near,q.distanceToPoint(t.origin));a=X(s,e,c.resolution)}q.expandByScalar(a),!1!==t.intersectsBox(q)&&(o?function(e,i){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,s=a.attributes.instanceEnd,l=Math.min(a.instanceCount,o.count);for(let a=0;a<l;a++){F.start.fromBufferAttribute(o,a),F.end.fromBufferAttribute(s,a),F.applyMatrix4(r);let l=new M.Vector3,d=new M.Vector3;t.distanceSqToSegment(F.start,F.end,d,l),d.distanceTo(l)<.5*n&&i.push({point:d,pointOnLine:l,distance:t.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[P]:null})}}(this,i):function(e,i,r){let a=i.projectionMatrix,o=e.material.resolution,s=e.matrixWorld,l=e.geometry,d=l.attributes.instanceStart,f=l.attributes.instanceEnd,c=Math.min(l.instanceCount,d.count),u=-i.near;t.at(1,V),V.w=1,V.applyMatrix4(i.matrixWorldInverse),V.applyMatrix4(a),V.multiplyScalar(1/V.w),V.x*=o.x/2,V.y*=o.y/2,V.z=0,N.copy(V),W.multiplyMatrices(i.matrixWorldInverse,s);for(let i=0;i<c;i++){if(G.fromBufferAttribute(d,i),H.fromBufferAttribute(f,i),G.w=1,H.w=1,G.applyMatrix4(W),H.applyMatrix4(W),G.z>u&&H.z>u)continue;if(G.z>u){let e=G.z-H.z,t=(G.z-u)/e;G.lerp(H,t)}else if(H.z>u){let e=H.z-G.z,t=(H.z-u)/e;H.lerp(G,t)}G.applyMatrix4(a),H.applyMatrix4(a),G.multiplyScalar(1/G.w),H.multiplyScalar(1/H.w),G.x*=o.x/2,G.y*=o.y/2,H.x*=o.x/2,H.y*=o.y/2,F.start.copy(G),F.start.z=0,F.end.copy(H),F.end.z=0;let l=F.closestPointToPointParameter(N,!0);F.at(l,k);let c=M.MathUtils.lerp(G.z,H.z,l),p=c>=-1&&c<=1,h=N.distanceTo(k)<.5*n;if(p&&h){F.start.fromBufferAttribute(d,i),F.end.fromBufferAttribute(f,i),F.start.applyMatrix4(s),F.end.applyMatrix4(s);let n=new M.Vector3,a=new M.Vector3;t.distanceSqToSegment(F.start,F.end,a,n),r.push({point:a,pointOnLine:n,distance:t.origin.distanceTo(a),object:e,face:null,faceIndex:i,uv:null,[P]:null})}}}(this,s,i))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(T),this.material.uniforms.resolution.value.set(T.z,T.w))}}class Q extends C{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];else for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5],i[2*r+6]=e[r+6],i[2*r+7]=e[r+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Y extends ${constructor(e=new Q,t=new D({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let Z=f.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:r,segments:a,dashed:o,...s},l){var c,u;let p=(0,A.useThree)(e=>e.size),h=f.useMemo(()=>a?new $:new Y,[a]),[m]=f.useState(()=>new D),v=(null==n||null==(c=n[0])?void 0:c.length)===4?4:3,y=f.useMemo(()=>{let i=a?new C:new Q,r=e.map(e=>{let t=Array.isArray(e);return e instanceof d.Vector3||e instanceof d.Vector4?[e.x,e.y,e.z]:e instanceof d.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(r.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof d.Color?e.toArray():e);i.setColors(e.flat(),v)}return i},[e,a,n,v]);return f.useLayoutEffect(()=>{h.computeLineDistances()},[e,h]),f.useLayoutEffect(()=>{o?m.defines.USE_DASH="":delete m.defines.USE_DASH,m.needsUpdate=!0},[o,m]),f.useEffect(()=>()=>{y.dispose(),m.dispose()},[y]),f.createElement("primitive",(0,E.default)({object:h,ref:l},s),f.createElement("primitive",{object:y,attach:"geometry"}),f.createElement("primitive",(0,E.default)({object:m,attach:"material",color:t,vertexColors:!!n,resolution:[p.width,p.height],linewidth:null!=(u=null!=i?i:r)?u:1,dashed:o,transparent:4===v},s)))});var ee=e.i(37239);let et=new d.Object3D,en=new d.Color;function ei(e){let t,n,a,o,s,l,d,c,u,p,h=(0,r.c)(28),{data:m,positions:v,metric:y,dotSize:g,opacity:x}=e,S=(0,f.useRef)(null);h[0]!==y?(t=y.replace("_int","").toLowerCase(),h[0]=y,h[1]=t):t=h[1];let w=t;if(h[2]!==m||h[3]!==w){let e;h[5]!==w?(e=e=>{let t=(0,ee.getSignalColor)(w,e.value);return en.set(t),[en.r,en.g,en.b]},h[5]=w,h[6]=e):e=h[6],n=m.map(e),h[2]=m,h[3]=w,h[4]=n}else n=h[4];let b=n;return(h[7]!==b||h[8]!==v?(a=()=>{let e=S.current;if(e&&0!==v.length){e.count=v.length;for(let t=0;t<v.length;t++){let[n,i,r]=v[t];et.position.set(n,i,r),et.scale.setScalar(1),et.updateMatrix(),e.setMatrixAt(t,et.matrix);let[a,o,s]=b[t];en.setRGB(a,o,s),e.setColorAt(t,en)}e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}},o=[v,b],h[7]=b,h[8]=v,h[9]=a,h[10]=o):(a=h[9],o=h[10]),(0,f.useLayoutEffect)(a,o),0===m.length||v.length<2)?null:(h[11]!==b||h[12]!==x||h[13]!==v?(s=(0,i.jsx)(Z,{points:v,vertexColors:b,lineWidth:4,transparent:!0,opacity:x}),h[11]=b,h[12]=x,h[13]=v,h[14]=s):s=h[14],h[15]!==m.length?(l=[void 0,void 0,m.length],h[15]=m.length,h[16]=l):l=h[16],h[17]!==g?(d=(0,i.jsx)("sphereGeometry",{args:[g,12,12]}),h[17]=g,h[18]=d):d=h[18],h[19]!==x?(c=(0,i.jsx)("meshStandardMaterial",{color:"#ffffff",transparent:!0,opacity:x,roughness:.3,metalness:.1}),h[19]=x,h[20]=c):c=h[20],h[21]!==l||h[22]!==d||h[23]!==c?(u=(0,i.jsxs)("instancedMesh",{ref:S,args:l,frustumCulled:!1,children:[d,c]}),h[21]=l,h[22]=d,h[23]=c,h[24]=u):u=h[24],h[25]!==s||h[26]!==u?(p=(0,i.jsxs)("group",{children:[s,u]}),h[25]=s,h[26]=u,h[27]=p):p=h[27],p)}function er(e){let t,n,d,c,u,p,h,m,v,y=(0,r.c)(18),{data:g,metric:S,pointSize:w,opacity:E,showBuilding:A,buildingWallOpacity:M,dotSize:L}=e;y[0]!==g?(t=g.map(ea),y[0]=g,y[1]=t):t=y[1];let U=t;return y[2]===Symbol.for("react.memo_cache_sentinel")?(n={position:[0,40,80],fov:60},d={antialias:!0},c=(0,i.jsx)(o.OrbitControls,{makeDefault:!0}),u=(0,i.jsx)("ambientLight",{intensity:.5}),p=(0,i.jsx)("directionalLight",{position:[10,10,5],intensity:1,castShadow:!0}),h=(0,i.jsx)(s.Environment,{preset:"city"}),y[2]=n,y[3]=d,y[4]=c,y[5]=u,y[6]=p,y[7]=h):(n=y[2],d=y[3],c=y[4],u=y[5],p=y[6],h=y[7]),y[8]===Symbol.for("react.memo_cache_sentinel")?(m=(0,i.jsx)(l.Grid,{infiniteGrid:!0,fadeDistance:500,sectionColor:"#4f4f4f",cellColor:"#2f2f2f",position:[0,-.1,0]}),y[8]=m):m=y[8],y[9]!==M||y[10]!==g||y[11]!==L||y[12]!==S||y[13]!==E||y[14]!==w||y[15]!==A||y[16]!==U?(v=(0,i.jsx)("div",{className:"w-full h-full bg-slate-950",children:(0,i.jsxs)(a.Canvas,{camera:n,gl:d,children:[c,u,p,h,m,A?(0,i.jsxs)(f.Suspense,{fallback:null,children:[(0,i.jsx)(_,{width:65,depth:45,floors:10,floorHeight:3,wallOpacity:M}),(0,i.jsx)(ei,{data:g,positions:U,metric:S,dotSize:L,opacity:E})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Suspense,{fallback:null,children:(0,i.jsx)(b,{scale:100,x:0,z:0,rotation:0})}),(0,i.jsx)(x,{data:g,pointSize:w,opacity:E})]})]})}),y[9]=M,y[10]=g,y[11]=L,y[12]=S,y[13]=E,y[14]=w,y[15]=A,y[16]=U,y[17]=v):v=y[17],v}function ea(e){var t;let[n,i]=(t=e.original.LON,[((t-151.210354)/9070000000122036e-19-.5)*65,(.5-(e.original.LAT- -33.864248)/8880000000033306e-19)*45]);return[n,1.5,i]}e.s(["Scene",()=>er],4220)},36103,e=>{e.n(e.i(4220))}]);