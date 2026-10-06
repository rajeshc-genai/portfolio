import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, X, Copy, Check, Linkedin, Send, Sparkles, ExternalLink, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';

export function ShareModal({ isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPost, setCopiedPost] = useState(false);

  const portfolioUrl = "https://rajeshc-genai.github.io/portfolio/";
  const currentUrl = typeof window !== 'undefined' ? window.location.href : portfolioUrl;

  const linkedInPostText = `🚀 Excited to share my new 3D Interactive Generative AI Portfolio!

Hi everyone! I am transitioning from my role as Customer Service Coordinator at Hapag-Lloyd into Generative AI Engineering. 

Check out my interactive 3D portfolio featuring:
✨ DocuMind: RAG-based Document Q&A chatbot using LangChain, FAISS & LLM APIs
✨ DelayPredict: Shipment delay prediction & cargo image classification using Random Forest + ANN & CNN in TensorFlow/Keras
✨ ShipLens: Logistics shipment data analytics, cleaning & pivot summaries using Python, Pandas & Matplotlib

👉 Explore the live 3D experience here: ${portfolioUrl}
GitHub: https://github.com/rajeshc-genai

I am actively open to Generative AI & Machine Learning internships and junior developer opportunities. I would love to connect!

#GenerativeAI #RAG #MachineLearning #Python #DeepLearning #LangChain #ArtificialIntelligence #TechJobs #OpenToWork`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopiedLink(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleCopyPost = () => {
    navigator.clipboard.writeText(linkedInPostText);
    setCopiedPost(true);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    setTimeout(() => setCopiedPost(false), 2500);
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Share Your Portfolio
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Ready to post on LinkedIn and share with recruiters
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Direct Live URL Field */}
          <div className="mb-6">
            <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Live Website Link
            </label>
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/50 border border-white/10">
              <Globe className="w-4 h-4 text-cyan-400 ml-2 shrink-0" />
              <input
                type="text"
                readOnly
                value={portfolioUrl}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-200 font-mono outline-none truncate"
              />
              <button
                onClick={handleCopyLink}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-mono text-xs transition-colors"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Action: Post on LinkedIn */}
          <div className="mb-6">
            <button
              onClick={shareToLinkedIn}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl font-heading font-bold text-sm text-white bg-[#0a66c2] hover:bg-[#004182] shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="w-5 h-5" />
              <span>Share Directly to LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
            </button>
          </div>

          {/* Ready-to-use LinkedIn Post Draft */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pre-Written LinkedIn Post Copy</span>
              </label>
              <button
                onClick={handleCopyPost}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                {copiedPost ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPost ? 'Copied Post!' : 'Copy Text'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 max-h-40 overflow-y-auto text-xs text-slate-300 font-sans leading-relaxed whitespace-pre-wrap select-all">
              {linkedInPostText}
            </div>
          </div>

          {/* Tip footer */}
          <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>TIP: Tag recruiters & mentors for high reach!</span>
            <span className="text-emerald-400">● 100% READY</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
