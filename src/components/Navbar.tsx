'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: isScrolled ? '15px 40px' : '25px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.4s ease',
            backgroundColor: isScrolled ? 'rgba(8, 8, 8, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(245, 208, 0, 0.1)' : 'none'
        }}>
            {/* LOGO */}
            <div
                onClick={() => scrollTo('s1')}
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '28px',
                    color: '#F5D000',
                    cursor: 'pointer',
                    letterSpacing: '1px'
                }}
            >
                PARCHE 90
            </div>

            {/* LINKS (Ocultos en móvil para minimalismo, o puedes dejarlos) */}
            <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
                <button onClick={() => scrollTo('s2')} style={linkStyle}>TECNOLOGÍA</button>
                <button onClick={() => scrollTo('s3')} style={linkStyle}>IDENTIDAD</button>
                <button
                    onClick={() => scrollTo('formulario')}
                    style={{
                        ...linkStyle,
                        backgroundColor: '#F5D000',
                        color: 'black',
                        padding: '8px 18px',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}
                >
                    COMPRAR
                </button>
            </div>

            {/* Estilo móvil rápido en el CSS de abajo */}
            <style jsx>{`
                @media (max-width: 768px) {
                    /* Oculta TODO el navbar en celulares */
                    nav { display: none !important; } 
                }
            `}</style>
        </nav>
    );
}

const linkStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '16px',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    outline: 'none'
};