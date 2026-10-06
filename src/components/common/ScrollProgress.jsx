import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-900/30 backdrop-blur-sm pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left shadow-[0_0_12px_rgba(34,211,238,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
