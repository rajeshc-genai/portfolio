import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Bot, BrainCircuit, ShieldCheck } from 'lucide-react';

export function HolographicAvatar() {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 260, mass: 0.4 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="relative mb-6 flex items-center justify-center">
      {/* Ambient Pulsing Glow Underneath */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-500/30 to-pink-500/25 blur-2xl animate-pulse-glow" />

      {/* Rotating Outer Radar Rings */}
      <div className="absolute -inset-2.5 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />
      <div className="absolute -inset-5 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isTouchDevice ? 0 : rotateX,
          rotateY: isTouchDevice ? 0 : rotateY,
        }}
        className="relative group cursor-pointer"
      >
        {/* Holographic Glowing Frame */}
        <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_35px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_55px_rgba(6,182,212,0.65)] transition-all duration-300">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-[22px] overflow-hidden bg-slate-950 border border-white/20">
            {/* Rajesh C's Portrait Photo */}
            <img
              src="./rajesh.jpg"
              alt="Rajesh C - Generative AI Developer"
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
              loading="eager"
            />

            {/* Holographic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-cyan-500/10 pointer-events-none" />

            {/* Scanning Laser Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Corner Tech Accents */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

            {/* Bottom Status Chip */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GEN AI DEV</span>
            </div>
          </div>
        </div>

        {/* Floating Satellite Badge 1 (Left) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute -left-12 top-6 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] pointer-events-none"
          style={{ transform: 'translateZ(30px)' }}
        >
          <Bot className="w-3.5 h-3.5 text-cyan-400" />
          <span>RAG & LLMs</span>
        </motion.div>

        {/* Floating Satellite Badge 2 (Right) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute -right-14 bottom-8 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 text-[11px] font-mono text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] pointer-events-none"
          style={{ transform: 'translateZ(30px)' }}
        >
          <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
          <span>Python & ML</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
