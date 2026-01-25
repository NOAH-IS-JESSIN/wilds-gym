import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const JungleFogShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer + Scene + Camera + Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) GLSL Shaders
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Modified Fragment Shader for "Jungle Fog" colors
    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(random(i), random(i + vec2(1.0,0.0)), u.x),
          mix(random(i + vec2(0.0,1.0)), random(i + vec2(1.0,1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        
        // Slow down time for a lazy fog effect
        float t = iTime * 0.15;

        vec2 p = uv; 
        p.y += 0.5;
        float f = fbm(vec2(p.x * 2.0, p.y + t));
        float mist = smoothstep(0.1, 0.5, f) * (1.0 - p.y);

        // JUNGLE COLORS
        // Dark Swamp Green
        vec3 c1 = vec3(0.05, 0.15, 0.05); 
        // Lighter Toxic Mist
        vec3 c2 = vec3(0.0, 0.6, 0.2);    
        
        // Mix colors based on vertical position
        vec3 color = mix(c1, c2, p.y) * mist;
        
        // Output with transparency (alpha based on mist intensity)
        gl_FragColor = vec4(color, mist * 0.8);
      }
    `;

    // 3) Build mesh
    const uniforms = {
      iTime:       { value: 0 },
      iResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
    };

    const material = new THREE.ShaderMaterial({ 
      vertexShader, 
      fragmentShader, 
      uniforms,
      transparent: true 
    });
    
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // 4) Resize logic
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener('resize', onResize);

    // 5) Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // 6) Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      renderer.setAnimationLoop(null);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
      aria-hidden="true"
    />
  );
};

export default JungleFogShader;