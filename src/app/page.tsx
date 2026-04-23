'use client';
import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TechSection from '@/components/sections/TechSection';
import IdentitySection from '@/components/sections/IdentitySection';
import CtaSection from '@/components/sections/CtaSection';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/ui/WhatsappButton';
import OrderForm from '@/components/OrderForm';

export default function Page() {
  useEffect(() => {
    // 1. Lógica Reveal (Animaciones de texto)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const ro = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    revealElements.forEach(el => ro.observe(el));

    // 2. Lógica Navigation Dots & Hint
    const scenes = document.querySelectorAll('.scene');
    const dots = document.querySelectorAll('.dot');
    const hint = document.getElementById('scrollHint');
    const so = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = Array.from(scenes).indexOf(e.target as Element);
          dots.forEach((d, j) => d.classList.toggle('active', i === j));
          if (hint) hint.style.opacity = i > 0 ? '0' : '1';
        }
      });
    }, { threshold: 0.5 });
    scenes.forEach(s => so.observe(s));

    return () => {
      revealElements.forEach(el => ro.unobserve(el));
      scenes.forEach(s => so.unobserve(s));
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#080808]">
      {/* NAVEGACIÓN LATERAL DIRECTA */}
      <nav className="nav-dots z-50" id="navDots">
        <div className="dot active" onClick={() => scrollTo('s1')} />
        <div className="dot" onClick={() => scrollTo('s2')} />
        <div className="dot" onClick={() => scrollTo('s3')} />
        <div className="dot" onClick={() => scrollTo('s4')} />
      </nav>

      {/* TEXTO "SCROLL" DIRECTO */}
      <div className="scroll-hint z-50" id="scrollHint">
        <span>Scroll</span>
        <div className="scroll-hint-line"></div>
      </div>

      {/* 2. LAS SECCIONES DE TEXTO (Flotando por encima sin props extrañas) */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TechSection />
        <IdentitySection />
        <CtaSection />
        <OrderForm />
        <WhatsAppButton />
      </div>
    </main>
  );
}