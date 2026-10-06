import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles, ExternalLink, Github, Code2, AlertCircle } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { projects, personal } = PORTFOLIO_CONFIG;

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Production AI & <span className="text-gradient">ML Solutions</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Hands-on implementations demonstrating end-to-end data pipelines, neural network classifications, and RAG architectures.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Config Hint Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-4 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>
              All project repositories link to your GitHub. Configure your username anytime in <code className="text-cyan-300 font-bold bg-white/5 px-2 py-0.5 rounded">src/data/portfolioConfig.js</code>.
            </span>
          </div>
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
