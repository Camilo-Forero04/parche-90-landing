'use client';
import { useState, useEffect } from 'react';

export default function ScrollHint() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-40 transition-opacity duration-600 animate-pulse-hint text-[11px] tracking-[5px] uppercase text-white/30 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span>Scroll</span>
            <div className="w-[1px] h-11 bg-gradient-to-b from-[#F5D000]/60 to-transparent" />
        </div>
    );
}