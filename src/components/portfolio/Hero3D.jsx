import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { isWebGLAvailable } from '../../utils/webglSupport';
import { portfolio } from '../../data/config';

function Portrait({ reducedMotion }) {
  const group = useRef(null);
  const texture = useTexture(portfolio.personal.portrait);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  const imageAspect = texture.image.width / texture.image.height;
  const frameAspect = 2.16 / 2.7;
  texture.repeat.set(frameAspect / imageAspect, 1);
  texture.offset.set((1 - texture.repeat.x) / 2, 0);
  texture.needsUpdate = true;
  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    const drift = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.55) * 0.035;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.16 + drift, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.12, 0.035);
    group.current.position.y = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.8) * 0.08;
  });
  return <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={reducedMotion ? 0 : 0.06} floatIntensity={reducedMotion ? 0 : 0.12}><group ref={group}>
    <RoundedBox args={[2.36, 2.95, 0.16]} radius={0.13} smoothness={5}><meshPhysicalMaterial color="#111827" metalness={0.5} roughness={0.22} clearcoat={1} emissive="#064953" emissiveIntensity={0.18} /></RoundedBox>
    <mesh position={[0, 0, 0.091]}><planeGeometry args={[2.16, 2.7]} /><meshBasicMaterial map={texture} toneMapped={false} /></mesh>
    <mesh position={[0, 0, 0.096]}><planeGeometry args={[2.16, 2.7]} /><meshBasicMaterial transparent opacity={0.1} color="#bdf8ff" /></mesh>
  </group></Float>;
}

function NeuralField({ reducedMotion, mobile }) {
  const points = useRef(null);
  const count = mobile ? 28 : 70;
  const positions = useMemo(() => new Float32Array(Array.from({ length: count }, (_, i) => {
    const angle = i * 2.399;
    const radius = 1.5 + ((i * 17) % 100) / 44;
    return [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.72, -1.5 - ((i * 11) % 40) / 20];
  }).flat()), [count]);
  const connections = useMemo(() => {
    const values = [];
    for (let index = 0; index < positions.length / 3; index += 1) {
      const next = (index + 7) % (positions.length / 3);
      values.push(...positions.slice(index * 3, index * 3 + 3), ...positions.slice(next * 3, next * 3 + 3));
    }
    return new Float32Array(values);
  }, [positions]);
  useFrame(({ pointer, clock }) => {
    if (!points.current || reducedMotion) return;
    points.current.rotation.y = pointer.x * 0.08 + Math.sin(clock.elapsedTime * 0.12) * 0.025;
    points.current.rotation.x = -pointer.y * 0.05;
  });
  return <group ref={points}>
    <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" count={connections.length / 3} array={connections} itemSize={3} /></bufferGeometry><lineBasicMaterial color="#53bcca" transparent opacity={0.16} /></lineSegments>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} /></bufferGeometry><pointsMaterial color="#6be7f4" size={mobile ? 0.035 : 0.025} transparent opacity={0.65} sizeAttenuation /></points>
  </group>;
}

export default function Hero3D({ reducedMotion }) {
  const [webgl, setWebgl] = useState(true);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setWebgl(isWebGLAvailable());
    const query = window.matchMedia('(max-width: 700px)');
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  if (!webgl) return <img className="hero-photo-fallback" src={portfolio.personal.portrait} alt="Rajesh C" />;
  return <Canvas camera={{ position: [0, 0, 6.2], fov: 38 }} dpr={[1, 1.35]} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}>
    <ambientLight intensity={1.1} /><pointLight position={[2, 3, 4]} color="#55e7f5" intensity={28} distance={9} /><pointLight position={[-3, -2, 2]} color="#a076ff" intensity={18} distance={8} />
    <NeuralField reducedMotion={reducedMotion} mobile={mobile} /><Portrait reducedMotion={reducedMotion} />
  </Canvas>;
}