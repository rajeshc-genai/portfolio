import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Download, Github, GraduationCap, Mail, MapPin, Menu, Phone, X, Linkedin } from 'lucide-react';
import { portfolio } from '../../data/config';
import './portfolio.css';

function SectionTitle({ eyebrow, title, accent, note }) {
  return <motion.div className="section-title" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.55 }}><span className="eyebrow">{eyebrow}</span><h2>{title} <span className="gradient-text">{accent}</span></h2>{note && <p>{note}</p>}</motion.div>;
}

function Navbar() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const sections = ['hero', ...portfolio.navigation.map(({ href }) => href.slice(1))];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    const onScroll = () => { const range = document.documentElement.scrollHeight - innerHeight; setProgress(range > 0 ? scrollY / range : 0); };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => { observer.disconnect(); removeEventListener('scroll', onScroll); };
  }, []);
  return <><div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} /><header className="site-header">
    <a className="brand" href="#hero" onClick={() => setOpen(false)}><span className="brand-mark">RC</span><span>Rajesh C<small>AI & ML PORTFOLIO</small></span></a>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{portfolio.navigation.map((item) => <a key={item.href} className={active === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
    <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
  </header></>;
}

function Typewriter({ reducedMotion }) {
  const [index, setIndex] = useState(0);
  useEffect(() => { if (reducedMotion) return undefined; const timer = setInterval(() => setIndex((value) => (value + 1) % portfolio.personal.taglines.length), 3000); return () => clearInterval(timer); }, [reducedMotion]);
  return <AnimatePresence mode="wait"><motion.span key={index} className="rotating-tagline" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }} transition={{ duration: 0.28 }}>{portfolio.personal.taglines[index]}</motion.span></AnimatePresence>;
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  useEffect(() => { if (matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined; const move = (event) => setPosition({ x: event.clientX, y: event.clientY }); addEventListener('pointermove', move, { passive: true }); return () => removeEventListener('pointermove', move); }, []);
  return <div className="cursor-glow" style={{ left: position.x, top: position.y }} />;
}

function ProjectCard({ project }) {
  return <motion.article className="project-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }} whileHover={{ y: -6, rotateX: 1.4 }}>
    <div className="project-topline"><span>{project.number}</span><Code2 size={17} /></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <div className="project-links"><a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>
  </motion.article>;
}

function SkillBadge({ children, index }) {
  return <motion.span className="skill-badge" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.035, 0.24) }}>{children}</motion.span>;
}

function TimelineItem() {
  const item = portfolio.experience;
  return <motion.article className="timeline-item" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><span className="timeline-dot" /><div className="timeline-heading"><div><span className="eyebrow">{item.period}</span><h3>{item.role}</h3><p>{item.company} <span>/</span> {item.location}</p></div><BriefcaseBusiness className="timeline-icon" size={22} /></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></motion.article>;
}

export function Portfolio({ Hero3D, PhotoCarousel3D, Suspense }) {
  const reducedMotion = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const person = portfolio.personal;
  const submit = (event) => { event.preventDefault(); const subject = `Portfolio inquiry from ${form.name}`; const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`; location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; };
  return <div className="portfolio-app"><Navbar /><CursorGlow /><main>
    <section id="hero" className="hero-section"><div className="hero-grid" /><div className="hero-content">
      <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span /> Open to AI/ML opportunities</motion.div>
      <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>HELLO, I’M</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32, duration: .6 }}>{person.name}<span className="hero-period">.</span></motion.h1>
      <div className="tagline-line"><Typewriter reducedMotion={reducedMotion} /></div>
      <motion.p className="hero-intro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>{person.intro}</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}><a className="button button-primary" href="#projects">View Projects <ArrowDown size={16} /></a><a className="button button-secondary" href={person.resumeUrl} download><Download size={16} /> Download Resume</a><a className="text-link" href="#contact">Contact Me <ArrowRight size={15} /></a></motion.div>
      <div className="hero-socials"><a href={person.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={person.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><span><MapPin size={14} /> {person.location}</span></div>
    </div><motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .25 }}><div className="hero-visual-label"><span>01 / PROFILE</span><span>CHENNAI, IN</span></div><div className="hero-canvas"><Suspense fallback={<img className="hero-photo-fallback" src={person.portrait} alt={person.name} />}><Hero3D reducedMotion={reducedMotion} /></Suspense></div><div className="visual-caption"><span className="caption-line" /><span>Building a career in AI & machine learning</span></div></motion.div><span className="hero-index">01 <i>—</i> 07</span></section>

    <section id="about" className="content-section"><SectionTitle eyebrow="01 / ABOUT" title="A thoughtful transition" accent="into AI." note="Bringing operational discipline into hands-on machine learning and generative AI work." /><div className="about-layout"><p className="about-copy">I’m an early-career professional moving from logistics operations into AI and machine learning. At Hapag-Lloyd, I work with shipment bookings, data checks, escalations and reporting. Alongside that experience, I’m building practical skills through projects in data analysis, prediction, neural networks and document question answering.</p><div className="about-meta"><span><MapPin size={17} /> {person.location}</span><span><BriefcaseBusiness size={17} /> Hapag-Lloyd · Jan 2025 - Present</span></div></div><div className="stats-row">{person.stats.map((stat, index) => <motion.div className="stat-item" key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><strong>{stat.value}<i>{index === 0 ? '+' : ''}</i></strong><span>{stat.label}</span></motion.div>)}</div></section>

    <section id="skills" className="content-section"><SectionTitle eyebrow="02 / SKILLS" title="Tools I work" accent="with." note="A growing toolkit shaped by projects and day-to-day operational work." /><div className="skill-groups">{portfolio.skills.map((group, index) => <motion.article className="skill-group" key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-list">{group.items.map((skill, skillIndex) => <SkillBadge key={skill} index={skillIndex}>{skill}</SkillBadge>)}</div></motion.article>)}</div></section>

    <section id="projects" className="content-section projects-section"><SectionTitle eyebrow="03 / SELECTED PROJECTS" title="Learning through" accent="building." note="Three practical projects across data analysis, machine learning and retrieval-augmented generation." /><div className="project-grid">{portfolio.projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></section>

    <section id="experience" className="content-section experience-section"><SectionTitle eyebrow="04 / EXPERIENCE" title="Experience that" accent="travels." note="Careful data work, clear communication and a steady focus on solving the issue at hand." /><div className="timeline"><TimelineItem /></div></section>

    <section id="education" className="content-section"><SectionTitle eyebrow="05 / EDUCATION & CERTIFICATIONS" title="Foundations for" accent="what’s next." /><div className="education-grid"><article className="education-card"><span className="education-icon"><GraduationCap size={20} /></span><span className="eyebrow">{portfolio.education.year}</span><h3>{portfolio.education.degree}</h3><p>{portfolio.education.institution}</p><span className="education-location"><MapPin size={14} /> {portfolio.education.location}</span></article><article className="education-card certification-card"><span className="education-icon"><Check size={20} /></span><span className="eyebrow">CERTIFICATIONS</span>{portfolio.education.certifications.map((cert) => <p className="certification-name" key={cert}>{cert}</p>)}<span className="education-location">Languages · {portfolio.education.languages.join(' · ')}</span></article></div></section>

    <section id="gallery" className="content-section gallery-section"><SectionTitle eyebrow="06 / A LITTLE ABOUT ME" title="A moment" accent="off the screen." note="A small photo collection from Chennai and beyond." /><Suspense fallback={<div className="gallery-loading">RC</div>}><PhotoCarousel3D /></Suspense></section>

    <section id="contact" className="contact-section"><div className="contact-inner"><div className="contact-copy"><span className="eyebrow">07 / CONTACT</span><h2>Looking for an AI/ML opportunity?<br /><span className="gradient-text">Let’s talk.</span></h2><p>I’m open to internships and entry-level roles where I can learn, build and contribute.</p><div className="contact-links"><a href={`mailto:${person.email}`}><Mail /> {person.email}</a><a href={`tel:${person.phone}`}><Phone /> {person.formattedPhone}</a><a href={person.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a><a href={person.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a></div></div>
      <form className="contact-form" onSubmit={submit}><label>Name<input required name="name" autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Email<input required type="email" name="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label><label>Message<textarea required name="message" rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /></label><button className="button button-primary" type="submit">Open email draft <ArrowUpRight size={16} /></button></form>
    </div></section>
  </main><footer className="site-footer"><a className="brand" href="#hero"><span className="brand-mark">RC</span><span>Rajesh C<small>ASPIRING AI & ML PROFESSIONAL</small></span></a><div className="footer-links">{portfolio.navigation.slice(0, 5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><span>© {new Date().getFullYear()} Rajesh C</span></footer></div>;
}