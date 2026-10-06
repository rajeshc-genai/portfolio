import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Ship, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  FileCode,
  ArrowUpRight
} from 'lucide-react';
import { TiltCard } from '../common/TiltCard';

export function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Icon mapping
  const renderIcon = () => {
    switch (project.icon) {
      case 'Ship':
        return <Ship className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
    }
  };

  // Color theme
  const getAccentGradient = () => {
    if (project.accent === 'cyan') {
      return 'from-cyan-500/20 via-blue-500/10 to-transparent';
    } else if (project.accent === 'purple') {
      return 'from-purple-500/20 via-pink-500/10 to-transparent';
    }
    return 'from-cyan-500/20 via-purple-500/15 to-transparent';
  };

  const glowColor =
    project.accent === 'cyan'
      ? 'rgba(6, 182, 212, 0.3)'
      : project.accent === 'purple'
      ? 'rgba(168, 85, 247, 0.3)'
      : 'rgba(56, 189, 248, 0.3)';

  return (
    <TiltCard
      className="glass-card rounded-3xl border border-white/10 hover:border-cyan-400/40 p-7 flex flex-col justify-between transition-all duration-300 group"
      glowColor={glowColor}
      maxTilt={8}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3.5">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all shadow-inner">
              {renderIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-400/30">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          <span className="font-mono text-xs text-slate-500 font-semibold">
            0{index + 1}
          </span>
        </div>

        {/* Project Subtitle */}
        <div className="text-xs font-mono text-purple-300/90 mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span>{project.subtitle}</span>
        </div>

        {/* Core Description strictly following instructions */}
        <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
          {project.description}
        </p>

        {/* Key Highlights list */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Expandable Technical Deep-Dive */}
        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>{isExpanded ? 'Hide Architecture Notes' : 'View Architecture Notes'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-slate-300 font-mono leading-relaxed"
              >
                <div className="text-cyan-400 text-[10px] uppercase font-bold mb-1 tracking-wider">
                  Implementation Detail
                </div>
                {project.longDescription}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono border border-white/5 hover:border-cyan-400/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: GitHub & Live Demo (strictly conditional!) */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        {/* GitHub Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs font-heading font-semibold transition-all group/btn"
        >
          <Github className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
          <span>Source Code</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-cyan-300 transition-colors" />
        </a>

        {/* Live Demo Button (Rendered ONLY if liveUrl is set) */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs font-heading font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group/live"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/live:scale-110 transition-transform" />
          </a>
        )}
      </div>
    </TiltCard>
  );
}
