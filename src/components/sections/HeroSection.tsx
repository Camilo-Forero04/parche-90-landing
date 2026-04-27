
export default function HeroSection() {
    return (
        <section className="scene" id="s1" style={{ padding: '40px 20px' }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

                {/* 1. MICRO-URGENCIA (En lugar del eyebrow genérico) */}
                <p className="s1-eyebrow" style={{
                    fontSize: '11px',
                    letterSpacing: '3px',
                    color: '#F5D000',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                }}>
                    🔥 ENVÍO GRATIS
                </p>

                {/* 2. TÍTULO PRINCIPAL INTACTO */}
                <h1 className="s1-title" style={{ fontSize: 'clamp(45px, 10vw, 130px)', lineHeight: '0.85', marginBottom: '20px' }}>
                    LA CAMISETA<br />QUE <em style={{ color: '#F5D000', fontStyle: 'normal' }}>LO DICE</em><br />TODO
                </h1>

                {/* 3. SUBCOPY + PRECIO VISIBLE DESDE ARRIBA */}
                <div style={{ marginBottom: '25px' }}>
                    <p className="s1-sub" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', opacity: 0.9, marginBottom: '12px' }}>
                        Se ve como la original. <span style={{ color: '#F5D000', fontWeight: 'bold' }}>No pagas como la original.</span>
                    </p>
                    <div style={{
                        fontSize: 'clamp(24px, 5vw, 36px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        fontFamily: "'Bebas Neue', sans-serif"
                    }}>
                        <span style={{ textDecoration: 'line-through', opacity: 0.4 }}>$380.000</span>
                        <span style={{ color: '#F5D000' }}>$129.900</span>
                    </div>
                    {/* AQUÍ ESTÁ EL NUEVO TEXTO DE ENVÍO GRATIS */}
                    <p style={{
                        color: '#F5D000',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginTop: '5px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>
                        + ENVÍO GRATIS
                    </p>
                </div>

                {/* 4. CONFIANZA INMEDIATA (Estilo píldoras premium) */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '30px'
                }}>
                    <span style={{ border: '1px solid #F5D000', color: '#F5D000', padding: '6px 14px', borderRadius: '50px', fontWeight: 'bold' }}>
                        🟡 Pagas cuando la recibes
                    </span>
                    <span style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: '50px', opacity: 0.8 }}>
                        📦 Entrega en Bogotá y alrededores
                    </span>
                    <span style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: '50px', opacity: 0.8 }}>
                        ⭐ +500 pedidos entregados
                    </span>
                </div>

                {/* 5. CTA ESPECÍFICO (Visible antes de la imagen) */}
                <div style={{ marginBottom: '40px' }}>
                    <a className="cta-btn" href="#formulario" style={{
                        padding: '16px 40px',
                        fontSize: '22px',
                        backgroundColor: '#F5D000',
                        color: 'black',
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: '2px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 10px 25px rgba(245, 208, 0, 0.2)'
                    }}>
                        COMPRAR POR $129.900
                    </a>
                </div>

                {/* 6. FRASE PSICOLÓGICA ANTES DE LA IMAGEN */}
                <p style={{
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    opacity: 0.8
                }}>
                    "No necesitas decir nada. Se nota."
                </p>

                {/* 7. CONTENEDOR DE IMAGEN AGRANDADO (Tu estilo original intacto) */}
                <div
                    className="hero-img-wrap"
                    id="heroImgWrap"
                    style={{
                        borderRadius: '32px', // Tu diseño original
                        overflow: 'hidden',
                        display: 'block',
                        width: '95%',
                        maxWidth: '850px',
                        margin: '0 auto 40px auto',
                        lineHeight: 0,
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                        transition: 'transform 0.3s ease'
                    }}
                >

                    <img
                        src="/imagenes/img1.webp"
                        alt="Camiseta Selección Colombia 2026 Versión Jugador G5"
                        width={850}
                        height={850}
                        fetchPriority="high"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            transform: 'scale(1.05)'
                        }}
                    />
                </div>

                <div className="vline" style={{ height: '60px', margin: '0 auto' }}></div>
            </div>
        </section>
    );
}