import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowDown, Send, Github, Linkedin, Sparkles, MapPin, Share2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { HeroCanvas } from '../3d/HeroCanvas';
import { TypewriterTagline } from './TypewriterTagline';
import { HolographicAvatar } from './HolographicAvatar';
import { ShareModal } from '../common/ShareModal';

export function Hero() {
  const { personal } = PORTFOLIO_CONFIG;
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D Interactive Three.js Neural Network Background */}
      <HeroCanvas />

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:border-cyan-400 transition-all">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="tracking-wide">Open to Generative AI Roles & Internships</span>
              <span className="text-white/40">|</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-400" /> Chennai, India
              </span>
            </div>
          </motion.div>

          {/* 3D Interactive Holographic Portrait Avatar */}
          <motion.div variants={itemVariants}>
            <HolographicAvatar />
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-sm sm:text-base md:text-lg font-mono text-cyan-400 tracking-wider uppercase font-semibold">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white">
              {personal.name}
            </h1>
          </motion.div>

          {/* Rotating Tagline Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="mt-3 min-h-[40px] sm:min-h-[50px] flex items-center justify-center text-xl sm:text-3xl md:text-4xl"
          >
            <TypewriterTagline words={personal.rotatingTitles} />
          </motion.div>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-sans font-normal backdrop-blur-[2px]"
          >
            {personal.shortBio}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            {/* View Projects */}
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            {/* Download Resume */}
            <a
              href={personal.resumeUrl}
              download
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-cyan-400/50 shadow-lg shadow-black/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* Share / Post to LinkedIn Button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-[#0a66c2]/80 hover:bg-[#0a66c2] border border-cyan-400/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-cyan-300" />
              <span>Share to LinkedIn</span>
            </button>

            {/* Contact Me */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-purple-400" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Icons & Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-5"
          >
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#38bdf8] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Tech keywords ribbon */}
          <motion.div
            variants={itemVariants}
            className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-slate-400"
          >
            <span className="text-cyan-400 font-semibold">CORE TECH:</span>
            {['Python', 'Pandas & NumPy', 'LangChain', 'FAISS', 'RAG Pipelines', 'LLM APIs', 'TensorFlow', 'Prompt Engineering'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-white/5 text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Down scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 text-[11px] font-mono tracking-widest opacity-60 hover:opacity-100 transition-opacity">
        <span>SCROLL DOWN</span>
        <div className="w-4 h-7 rounded-full border border-slate-600 flex items-start justify-center p-1 mt-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
