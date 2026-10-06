import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, BookOpen, Sparkles, Sheet, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { TiltCard } from '../common/TiltCard';

export function EducationCertifications() {
  const { education, certifications } = PORTFOLIO_CONFIG.educationAndCerts;

  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. CREDENTIALS & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Academic grounding in Information Systems coupled with specialized certifications in Generative AI and Data Modeling.
          </p>
        </div>

        {/* 2 Column Layout: Education vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                Academic Background
              </h3>
            </div>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TiltCard
                  className="glass-card rounded-3xl border border-white/10 hover:border-cyan-400/40 p-7 transition-all"
                  glowColor="rgba(6, 182, 212, 0.2)"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-400/30">
                      {edu.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-heading font-extrabold text-white mb-2">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-semibold text-cyan-300 mb-1">
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                    {edu.details}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Award className="w-5 h-5" />
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard
                    className="h-full glass-card rounded-3xl border border-white/10 hover:border-purple-400/40 p-6 flex flex-col justify-between transition-all"
                    glowColor="rgba(168, 85, 247, 0.25)"
                  >
                    <div>
                      {/* Top badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                          {idx === 0 ? <Sparkles className="w-5 h-5 text-cyan-300" /> : <Sheet className="w-5 h-5 text-emerald-400" />}
                        </span>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>VERIFIED</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-heading font-bold text-white mb-1.5">
                        {cert.title}
                      </h4>

                      <div className="text-xs font-mono text-purple-300/80 mb-3">
                        {cert.issuer}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        <strong className="text-slate-200">Key Focus: </strong>
                        {cert.focus}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                      <span>{cert.badge}</span>
                      <span className="text-slate-500">READY TO DEPLOY</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
