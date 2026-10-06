import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { isWebGLAvailable } from '../../utils/webglSupport';

const SKILL_TAGS = [
  { name: 'RAG Architecture', cat: 'genai' },
  { name: 'LangChain', cat: 'genai' },
  { name: 'FAISS Vector DB', cat: 'genai' },
  { name: 'Prompt Engineering', cat: 'genai' },
  { name: 'LLM APIs', cat: 'genai' },
  { name: 'Vector Embeddings', cat: 'genai' },
  { name: 'Python', cat: 'ml' },
  { name: 'TensorFlow', cat: 'ml' },
  { name: 'Keras', cat: 'ml' },
  { name: 'Random Forest', cat: 'ml' },
  { name: 'ANN & CNN', cat: 'ml' },
  { name: 'Pandas', cat: 'data' },
  { name: 'NumPy', cat: 'data' },
  { name: 'Matplotlib', cat: 'data' },
  { name: 'Streamlit', cat: 'data' },
  { name: 'Data Validation', cat: 'data' },
  { name: 'MS Excel', cat: 'data' },
  { name: 'EDA & Pivots', cat: 'data' },
];

function SkillCloudSphere({ activeCategory }) {
  const groupRef = useRef();

  // Distribute skills evenly on a 3D sphere via Fibonacci spherical spiral
  const tagsWithPos = useMemo(() => {
    const total = SKILL_TAGS.length;
    return SKILL_TAGS.map((tag, i) => {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 2.8;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      return {
        ...tag,
        position: [x, y, z],
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.4,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -state.pointer.x * 0.4,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {tagsWithPos.map((tag, idx) => {
        const isHighlighted = !activeCategory || activeCategory === 'all' || tag.cat === activeCategory;

        const badgeColor =
          tag.cat === 'genai'
            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
            : tag.cat === 'ml'
            ? 'bg-purple-500/20 text-purple-300 border-purple-400/50 shadow-[0_0_12px_rgba(139,92,246,0.4)]'
            : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]';

        return (
          <group key={idx} position={tag.position}>
            <Html
              center
              distanceFactor={8}
              transform
              sprite
              style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: isHighlighted ? 1 : 0.25,
                transform: isHighlighted ? 'scale(1)' : 'scale(0.8)',
                pointerEvents: 'none',
              }}
            >
              <div
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap border backdrop-blur-md transition-all select-none ${badgeColor}`}
              >
                {tag.name}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function Skills3DSphere({ activeCategory = 'all' }) {
  const [hasWebGL, setHasWebGL] = useState(true);

  React.useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div className="w-full h-[340px] sm:h-[400px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <SkillCloudSphere activeCategory={activeCategory} />
      </Canvas>
    </div>
  );
}
