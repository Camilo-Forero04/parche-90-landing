'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TextOverlays() {
    const { scrollYProgress } = useScroll();

    const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const yHero = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    const opacityFinal = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    return (
        <div className="relative z-10 w-full">
            {/* SECCIÓN 1: HERO */}
            <section className="h-screen flex items-center justify-center sticky top-0">
                <motion.div style={{ opacity: opacityHero, y: yHero }} className="text-center px-4">
                    <span className="block text-xs md:text-sm font-black tracking-[0.4em] mb-4 text-black/30 uppercase">
                        Auténtica Calidad Pro
                    </span>
                    <h1 className="text-5xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic">
                        COLOMBIA<br />2026.
                    </h1>
                    <p className="mt-6 text-sm md:text-lg font-bold text-black/50 uppercase tracking-widest">
                        Siente el peso de la historia
                    </p>
                </motion.div>
            </section>

            {/* SECCIÓN DE TRANSICIÓN (Añade h-[200vh] para que la animación dure más) */}
            <div className="h-[250vh]" />

            {/* SECCIÓN FINAL: COMPRA */}
            <section className="h-screen flex items-center justify-center sticky top-0">
                <motion.div style={{ opacity: opacityFinal }} className="text-center px-6">
                    <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-10">
                        LA TIENES<br />A UN CLIC.
                    </h2>
                    <button className="bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:bg-neutral-800 transition-colors shadow-2xl active:scale-95">
                        PEDIR AHORA — $129.900
                    </button>
                    <p className="mt-8 text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">
                        Pago Contra Entrega | Bogotá & Soacha
                    </p>
                </motion.div>
            </section>
        </div>
    );
}