import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink, Building2, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { TiltCard } from '../common/TiltCard';

export function Experience() {
  const { experience } = PORTFOLIO_CONFIG;

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. PROFESSIONAL TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Operational excellence and analytical reporting that underpins my transition into Generative AI engineering.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 ml-4 sm:ml-12 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Glowing timeline node beacon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_15px_#22d3ee]" />
                </span>
              </div>

              {/* Experience Card */}
              <TiltCard
                className="glass-card rounded-3xl border border-white/10 hover:border-cyan-400/40 p-6 sm:p-8 transition-all group"
                glowColor="rgba(6, 182, 212, 0.25)"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-purple-400 font-semibold">
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-300 font-mono">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white hover:text-cyan-400 font-semibold transition-colors"
                      >
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.company}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 sm:self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Context */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-5">
                  {item.description}
                </p>

                {/* 3 Explicit Bullets */}
                <div className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Competencies Applied */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-2">APPLIED DOMAINS:</span>
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-mono border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
