import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { isWebGLAvailable } from '../../utils/webglSupport';
import { HeroNeuralScene } from './HeroNeuralScene';

// Fallback CSS/SVG scene for devices without WebGL or with reduced motion
function FallbackHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial ambient glow orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[130px]" />
      
      {/* Decorative SVG grid & nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#38bdf8" />
            <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>
    </div>
  );
}

export function HeroCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    setHasWebGL(isWebGLAvailable());

    // Screen size detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    const handleResize = () => checkMobile();

    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (!hasWebGL) {
    return <FallbackHeroBackground />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Subtle background glow layers under canvas */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <Suspense fallback={<FallbackHeroBackground />}>
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: isMobile ? 55 : 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          className="w-full h-full !pointer-events-auto"
        >
          <HeroNeuralScene
            isMobile={isMobile}
            prefersReducedMotion={prefersReducedMotion}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
