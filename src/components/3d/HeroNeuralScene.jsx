import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HeroNeuralScene({ isMobile = false, prefersReducedMotion = false }) {
  const groupRef = useRef();
  const innerSphereRef = useRef();
  const particlesRef = useRef();

  // Determine node count based on screen size
  const nodeCount = isMobile ? 32 : 64;
  const maxDistance = isMobile ? 2.8 : 2.5;

  // Generate 3D coordinates for neural network nodes
  const { nodePositions, linePositions, lineColors } = useMemo(() => {
    const coords = [];
    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere with radius variation
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.4 + (Math.sin(i * 1.5) * 0.7);

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      coords.push(new THREE.Vector3(x, y, z));
    }

    // Connect close nodes with lines
    const lineCoords = [];
    const colors = [];
    const colorCyan = new THREE.Color('#06b6d4');
    const colorPurple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < coords.length; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        const dist = coords[i].distanceTo(coords[j]);
        if (dist < maxDistance) {
          lineCoords.push(coords[i].x, coords[i].y, coords[i].z);
          lineCoords.push(coords[j].x, coords[j].y, coords[j].z);

          // Blend cyan & purple across lines
          const alpha = (i / coords.length);
          const c1 = colorCyan.clone().lerp(colorPurple, alpha);
          const c2 = colorPurple.clone().lerp(colorCyan, alpha);

          colors.push(c1.r, c1.g, c1.b);
          colors.push(c2.r, c2.g, c2.b);
        }
      }
    }

    const flatNodePos = new Float32Array(coords.length * 3);
    coords.forEach((c, idx) => {
      flatNodePos[idx * 3] = c.x;
      flatNodePos[idx * 3 + 1] = c.y;
      flatNodePos[idx * 3 + 2] = c.z;
    });

    return {
      nodePositions: flatNodePos,
      linePositions: new Float32Array(lineCoords),
      lineColors: new Float32Array(colors)
    };
  }, [nodeCount, maxDistance]);

  // Ambient particle cloud surrounding the neural net
  const ambientParticleCount = isMobile ? 80 : 180;
  const ambientPositions = useMemo(() => {
    const pos = new Float32Array(ambientParticleCount * 3);
    for (let i = 0; i < ambientParticleCount; i++) {
      const r = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [ambientParticleCount]);

  // Animation frame loop with smooth mouse parallax
  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    if (groupRef.current) {
      // Continuous gentle rotation
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.05;

      // Mouse parallax reaction
      const targetRotX = (state.pointer.y * Math.PI) * 0.15;
      const targetRotY = (state.pointer.x * Math.PI) * 0.25;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + delta * 0.1, 0.1);
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 0.5, delta * 2);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 0.3, delta * 2);
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.2;
      innerSphereRef.current.rotation.z += delta * 0.15;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />

      {/* Main Neural Network Group */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Synaptic Connection Lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={lineColors.length / 3}
              array={lineColors}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            vertexColors
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
            linewidth={1}
          />
        </lineSegments>

        {/* Neural Network Nodes */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={nodePositions.length / 3}
              array={nodePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={isMobile ? 0.14 : 0.18}
            color="#38bdf8"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>

        {/* Central Core Pulsing Wireframe Sphere */}
        <mesh ref={innerSphereRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshBasicMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* Surrounding Ambient Particle Dust */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={ambientPositions.length / 3}
            array={ambientPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#a855f7"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
