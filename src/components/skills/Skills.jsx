import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Bot, 
  Brain, 
  Database, 
  Cpu, 
  Layers, 
  Terminal, 
  Table, 
  FileText, 
  Filter, 
  Search, 
  Sliders, 
  LineChart, 
  Sheet, 
  Layout, 
  GitBranch,
  Network,
  Eye,
  GitFork,
  Boxes,
  Binary
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { Skills3DSphere } from './Skills3DSphere';
import { TiltCard } from '../common/TiltCard';

// Icon resolver
const ICON_MAP = {
  Bot,
  Brain,
  Database,
  Cpu,
  Layers,
  Terminal,
  Table,
  FileText,
  Filter,
  Search,
  Sliders,
  LineChart,
  Sheet,
  Layout,
  GitBranch,
  Network,
  Eye,
  GitFork,
  Boxes,
  Binary,
  Sparkles
};

export function Skills() {
  const { categories } = PORTFOLIO_CONFIG.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Specialized Skills & <span className="text-gradient">Tooling</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Core competencies organized across Generative AI architectures, Machine Learning pipelines, and data systems.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Domains (100%)
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Skills Sphere Cloud Preview */}
        <div className="mb-12 relative flex items-center justify-center">
          <div className="w-full max-w-xl glass-card rounded-3xl p-4 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-3 left-4 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 z-20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INTERACTIVE 3D SKILL CLOUD</span>
            </div>
            <div className="absolute top-3 right-4 text-[11px] font-mono text-slate-500 z-20">
              ROTATE & HOVER
            </div>
            <Skills3DSphere activeCategory={selectedCategory} />
          </div>
        </div>

        {/* Grouped Skills Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const CategoryIcon = ICON_MAP[category.icon] || Bot;

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <TiltCard
                    className="h-full glass-card p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between"
                    glowColor={category.glow}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div
                          className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                        >
                          <CategoryIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white">
                            {category.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {category.items.length} Core Competencies
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Skill Badges Cloud */}
                      <div className="flex flex-wrap gap-2.5">
                        {category.items.map((skill, sIdx) => {
                          const ItemIcon = ICON_MAP[skill.icon] || Sparkles;

                          return (
                            <motion.div
                              key={skill.name}
                              whileHover={{ y: -3, scale: 1.04 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                              className="group relative px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center gap-2 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                            >
                              <ItemIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                              <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                                {skill.name}
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400 group-hover:text-cyan-300 border border-white/5">
                                {skill.level}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>VERIFIED IN PROJECTS</span>
                      <span className="text-cyan-400">● READY FOR USE</span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
