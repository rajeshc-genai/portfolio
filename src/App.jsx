import React from 'react';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CursorFollower } from './components/common/CursorFollower';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { EducationCertifications } from './components/education/EducationCertifications';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/common/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050814] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Glowing Desktop Cursor Follower */}
      <CursorFollower />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
