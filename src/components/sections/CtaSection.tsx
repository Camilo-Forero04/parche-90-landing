import Image from 'next/image';

export default function CtaSection() {
    return (
        <section className="scene" id="s4" style={{
            padding: '80px 20px',
            backgroundColor: '#060606',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>

                {/* IMAGEN HERO DEL CIERRE (Mantiene el glow intacto) */}
                <div className="s4-img-wrap" style={{
                    borderRadius: '32px',
                    overflow: 'hidden',
                    width: '90%',
                    maxWidth: '500px',
                    margin: '0 auto 35px auto',
                    backgroundColor: '#000',
                    boxShadow: '0 0 clamp(40px, 10vw, 120px) rgba(245, 208, 0, 0.25)',
                    border: '1px solid rgba(245, 208, 0, 0.15)',
                    lineHeight: 0
                }}>
                    <Image src="/imagenes/img4.webp" alt="Camiseta Final" style={{ width: '100%', filter: 'drop-shadow(0 0 25px rgba(245, 208, 0, 0.15))' }} />
                </div>

                {/* BRANDING Y URGENCIA */}
                <p style={{ fontSize: '11px', letterSpacing: '4px', color: 'white', opacity: 0.5, textTransform: 'uppercase', marginBottom: '8px' }}>
                    PARCHE 90
                </p>
                <p style={{ color: '#F5D000', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold', marginBottom: '25px' }}>
                    ⚠️ ÚLTIMAS UNIDADES EN TALLAS M Y L
                </p>

                {/* HEADLINE: EL GOLPE DE FOMO (Fear Of Missing Out) */}
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(45px, 9vw, 95px)', lineHeight: '0.9', color: 'white', marginBottom: '25px' }}>
                    DISPONIBLE HOY.<br />
                    <span style={{ opacity: 0.5 }}>MAÑANA QUIÉN SABE.</span>
                </h2>

                {/* COMPARACIÓN DE PRECIOS VISUALMENTE AGRESIVA */}
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontFamily: "'Bebas Neue', sans-serif", color: 'white', opacity: 0.4, textDecoration: 'line-through', lineHeight: '1' }}>
                        $380.000
                    </div>
                    <div style={{ fontSize: 'clamp(65px, 16vw, 140px)', fontFamily: "'Bebas Neue', sans-serif", color: '#F5D000', lineHeight: '0.9', margin: '5px 0' }}>
                        $129.900
                    </div>
                    <p style={{ color: '#F5D000', fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 'bold', marginTop: '10px' }}>
                        🔥 Ahorras más de $250.000
                    </p>
                </div>

                {/* BLOQUE DE CONFIANZA TIPO "CERTIFICADO APPLE" */}
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    padding: '30px',
                    maxWidth: '450px',
                    margin: '0 auto 40px auto',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left', fontSize: 'clamp(15px, 2vw, 17px)', fontWeight: '500', opacity: 0.9 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '22px' }}>📦</span> <span>Recibes primero</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '22px' }}>💰</span> <span>Pagas después</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontSize: '22px' }}>🔍</span> <span>Revisas antes de pagar</span>
                        </div>
                    </div>
                    <div style={{
                        marginTop: '25px',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        color: '#F5D000',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 'clamp(14px, 2vw, 16px)'
                    }}>
                        Si no te convence, no la pagas.
                    </div>
                </div>

                {/* CTA DEFINITIVO Y MICROCOPY */}
                <a className="cta-btn" href="#formulario" style={{
                    padding: '22px 0',
                    width: 'clamp(280px, 90%, 500px)',
                    fontSize: 'clamp(20px, 4vw, 26px)',
                    backgroundColor: '#F5D000',
                    color: 'black',
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: '1px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 15px 40px rgba(245,208,0,0.25)',
                    transition: 'transform 0.2s ease'
                }}>
                    QUIERO LA MÍA — PAGO AL RECIBIR
                </a>

                <p style={{ marginTop: '25px', opacity: 0.5, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Entrega rápida · Envío gratis
                </p>
            </div>
        </section>
    );
}