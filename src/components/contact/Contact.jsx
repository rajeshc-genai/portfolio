import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  FileDown, 
  Clock, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { TiltCard } from '../common/TiltCard';

export function Contact() {
  const { personal, contact } = PORTFOLIO_CONFIG;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with confetti feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#8b5cf6', '#ec4899'],
      });

      // Construct mailto link fallback
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06. LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Looking for a motivated Generative AI intern or junior developer? I'd love to connect, collaborate, or discuss potential opportunities.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Direct Email Card */}
            <TiltCard
              className="glass-card rounded-3xl border border-white/10 hover:border-cyan-400/40 p-6 transition-all"
              glowColor="rgba(6, 182, 212, 0.25)"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard
              className="glass-card rounded-3xl border border-white/10 hover:border-purple-400/40 p-6 transition-all"
              glowColor="rgba(168, 85, 247, 0.25)"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {contact.formattedPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-300 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </TiltCard>

            {/* Location & Timezone Card */}
            <div className="glass-card rounded-3xl border border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    Location & Availability
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {contact.location}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    Timezone: {contact.timezone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/10 hover:border-[#0a66c2]/50 flex items-center justify-between text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-[#38bdf8]" />
                  <span className="text-xs font-heading font-semibold">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-white/10 hover:border-white/30 flex items-center justify-between text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-slate-300" />
                  <span className="text-xs font-heading font-semibold">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>

            {/* Resume Callout */}
            <a
              href={personal.resumeUrl}
              download
              className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-transparent border border-cyan-500/30 hover:border-cyan-400 flex items-center justify-between text-white transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group"
            >
              <div className="flex items-center gap-3">
                <FileDown className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-semibold">Download Official Resume</div>
                  <div className="text-[11px] text-slate-400 font-mono">PDF Format • 1-Page Summary</div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-300 group-hover:underline">
                Download →
              </span>
            </a>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl border border-white/10 p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-b from-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the message details below to send an email inquiry directly to Rajesh C.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been prepared. You can also reach me directly at{' '}
                    <strong className="text-cyan-300">{contact.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Generative AI Internship / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Rajesh, we came across your work in RAG and shipment data analytics and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Preparing Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
