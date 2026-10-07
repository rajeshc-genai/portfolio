import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { portfolio } from '../../data/config';

const items = portfolio.personal.photos.length >= 3
  ? portfolio.personal.photos.map((src) => ({ src }))
  : [...portfolio.personal.photos.map((src) => ({ src })), { label: 'Rajesh C', detail: 'Chennai, India' }, { label: 'AI / ML', detail: 'Learning by building' }];

export default function PhotoCarousel3D() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const startX = useRef(null);
  const angle = 360 / items.length;
  useEffect(() => {
    if (!lightbox) return undefined;
    const close = (event) => event.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', close);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', close); document.body.style.overflow = ''; };
  }, [lightbox]);
  useEffect(() => {
    if (lightbox) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % items.length), 6000);
    return () => window.clearInterval(timer);
  }, [lightbox]);
  const move = (direction) => setActive((current) => (current + direction + items.length) % items.length);
  const pointerUp = (event) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 32) move(delta < 0 ? 1 : -1);
    startX.current = null;
  };
  return <>
    <div className="carousel-shell" onPointerDown={(event) => { startX.current = event.clientX; }} onPointerUp={pointerUp} onPointerCancel={() => { startX.current = null; }}>
      <div className="carousel-glow" /><div className="carousel-stage"><div className="carousel-ring" style={{ transform: `rotateY(${-active * angle}deg)` }}>
        {items.map((item, index) => <div className="carousel-card" key={item.src || item.label} style={{ transform: `rotateY(${index * angle}deg) translateZ(190px)` }}>
          <div className={`photo-screen ${item.src ? '' : 'photo-screen-placeholder'}`}>
            {item.src ? <button className="photo-screen-image" onClick={() => setLightbox(item.src)} aria-label="Open portrait photo"><img src={item.src} alt="Rajesh C" loading="lazy" /><span className="screen-reflection" /><span className="screen-scanline" /></button>
              : <div className="photo-placeholder-content"><span className="placeholder-initials">RC</span><span>{item.label}</span><small>{item.detail}</small></div>}
          </div>
        </div>)}
      </div></div>
      <div className="carousel-controls"><button className="icon-button" onClick={() => move(-1)} aria-label="Previous photo"><ArrowLeft size={18} /></button><span>{String(active + 1).padStart(2, '0')} <i>/</i> {String(items.length).padStart(2, '0')}</span><button className="icon-button" onClick={() => move(1)} aria-label="Next photo"><ArrowRight size={18} /></button></div>
    </div>
    <AnimatePresence>{lightbox && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}><button className="icon-button lightbox-close" onClick={() => setLightbox(null)} aria-label="Close photo"><X size={20} /></button><motion.img src={lightbox} alt="Rajesh C" initial={{ scale: 0.88 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }} onClick={(event) => event.stopPropagation()} /></motion.div>}</AnimatePresence>
  </>;
}