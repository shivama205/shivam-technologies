"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform vec3 uPaper;
  uniform vec3 uPaper2;
  uniform vec3 uAccent;
  uniform vec3 uInk;

  // Hash + simplex-ish noise (cheap)
  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i=0;i<5;i++){
      v += a * snoise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    // Slow drifting field
    float t = uTime * 0.06;
    vec2 q = vec2(fbm(p*1.2 + vec2(t, -t)), fbm(p*1.2 + vec2(-t, t*0.7)));
    vec2 r = vec2(fbm(p*1.4 + q*1.5 + t), fbm(p*1.4 + q*1.5 - t));
    float n = fbm(p*1.1 + r*1.3 + uMouse*0.3);

    // Soft radial focus pulling toward center / mouse
    vec2 focus = mix(vec2(0.0), uMouse*1.2, 0.5);
    float d = length(p - focus);
    float ring = smoothstep(1.6, 0.0, d);

    // Color mixing: paper to paper2 with accent bloom
    float field = clamp(n*0.5 + 0.5, 0.0, 1.0);
    vec3 base = mix(uPaper, uPaper2, smoothstep(0.35, 0.85, field));
    float bloom = pow(clamp((n + 0.45) * ring, 0.0, 1.0), 2.4);
    vec3 col = mix(base, uAccent, bloom * 0.65);

    // Subtle ink darkening at edges (vignette)
    float vig = smoothstep(1.4, 0.4, length(p));
    col = mix(uInk * 0.92, col, mix(0.55, 1.0, vig));

    // Film grain
    float grain = fract(sin(dot(uv*uResolution, vec2(12.9898, 78.233))) * 43758.5453);
    col -= (grain - 0.5) * 0.025;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPaper: { value: new THREE.Color("#faf8f4") },
      uPaper2: { value: new THREE.Color("#efe7d6") },
      uAccent: { value: new THREE.Color("#c2410c") },
      uInk: { value: new THREE.Color("#1a1a1a") },
    }),
    [],
  );

  useFrame((state) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    const { width, height } = state.size;
    mat.current.uniforms.uResolution.value.set(width, height);
    // ease mouse
    mouse.current.lerp(state.pointer, 0.04);
    mat.current.uniforms.uMouse.value.copy(mouse.current);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.75]}
      className="!absolute inset-0"
    >
      <ShaderPlane />
    </Canvas>
  );
}
