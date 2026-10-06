import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Sparkles, 
  Award, 
  MapPin, 
  CheckCircle, 
  BrainCircuit, 
  Binary, 
  ShieldCheck, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { TiltCard } from '../common/TiltCard';

export function About() {
  const { personal } = PORTFOLIO_CONFIG;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Bridging Operational Data Rigor with <span className="text-gradient">Generative AI</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From managing high-stakes logistics data pipelines to engineering autonomous RAG agents and neural architectures.
          </p>
        </motion.div>

        {/* Stats Row (Real content: 1.11 years experience, 3 Gen AI/ML projects, 2 certifications, Chennai location) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {personal.stats.map((stat, index) => {
            const icons = [Briefcase, BrainCircuit, Award, MapPin];
            const Icon = icons[index % icons.length];

            return (
              <motion.div key={stat.id} variants={itemVariants}>
                <TiltCard
                  className="p-6 glass-card border border-white/10 hover:border-cyan-500/40 rounded-2xl relative overflow-hidden group"
                  glowColor="rgba(6, 182, 212, 0.2)"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {stat.unit}
                    </span>
                  </div>

                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-sans font-semibold text-slate-200 text-sm mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {stat.sublabel}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bio & Pillars Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 inline-block" />
                Engineering Mindset & Real-World Experience
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                {personal.detailedBio.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Info Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LOCATION</div>
                    <div className="text-xs sm:text-sm font-medium text-white">{personal.location}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 truncate pl-2">
                      {personal.email}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors flex items-center gap-1 text-xs font-mono"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Competencies Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Pillar 1 */}
            <TiltCard
              className="p-6 glass-card border border-white/10 hover:border-cyan-500/40 rounded-2xl"
              glowColor="rgba(6, 182, 212, 0.25)"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 text-cyan-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    RAG & LLM Orchestration
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Building hallucination-resilient document Q&A pipelines using LangChain, FAISS vector search, and structured prompt engineering.
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Pillar 2 */}
            <TiltCard
              className="p-6 glass-card border border-white/10 hover:border-purple-500/40 rounded-2xl"
              glowColor="rgba(168, 85, 247, 0.25)"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-purple-400">
                  <Binary className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Deep Learning & ML Baselines
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Developing and evaluating Random Forest classifiers, tabular ANNs, and image CNNs in TensorFlow/Keras and Scikit-learn.
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Pillar 3 */}
            <TiltCard
              className="p-6 glass-card border border-white/10 hover:border-emerald-500/40 rounded-2xl"
              glowColor="rgba(16, 185, 129, 0.25)"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Data Integrity & Reporting
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Proven background at Hapag-Lloyd resolving shipment anomalies, handling missing values & duplicates, and crafting daily analytical reports.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
