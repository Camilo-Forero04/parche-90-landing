import Image from 'next/image';

export default function IdentitySection() {
    return (
        <section className="scene" id="s3" style={{ padding: '60px 20px', position: 'relative', overflow: 'hidden' }}>
            <div className="s3-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '40px' }}>

                {/* TEXTO: LADO IZQUIERDO */}
                <div className="s3-text reveal-left" style={{ flex: '1 1 400px' }}>
                    <p className="badge" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        02 · Identidad
                    </p>
                    <div className="yr" style={{ margin: '15px 0' }}></div>

                    <h2 className="sec-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '0.9', marginBottom: '25px' }}>
                        EL AMARILLO<br />
                        <span style={{ color: '#F5D000' }}>QUE IMPONE</span>
                    </h2>

                    <div className="sec-body" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', opacity: 0.9, lineHeight: '1.6', marginBottom: '25px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            No es solo una camiseta.<br />
                            <strong>Es cómo te ves. Es cómo te perciben.</strong>
                        </p>

                        <p style={{ marginBottom: '15px', opacity: 0.8 }}>
                            Cuello en V, detalles precisos y escudo limpio al pecho. Todo donde tiene que estar.
                        </p>

                        <p style={{ marginBottom: '15px' }}>
                            A simple vista es la misma. En la mano, también.<br />
                            <strong style={{ color: '#F5D000' }}>No es la oficial… pero nadie nota la diferencia</strong>
                        </p>

                        {/* Refuerzo clave (Estilo cita) */}
                        <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: 'clamp(15px, 1.4vw, 18px)', borderLeft: '2px solid #F5D000', paddingLeft: '15px' }}>
                            La única diferencia es lo que pagas.
                        </p>
                    </div>

                    {/* LOS PUNTOS DE COLOR (SWATCHES) SE MANTIENEN PORQUE DAN LOOK PREMIUM */}
                    <div className="swatch-row" style={{ display: 'flex', gap: '15px' }}>
                        <div className="swatch" style={{ background: '#F5D000', width: '40px', height: '40px', borderRadius: '50%', boxShadow: '0 5px 15px rgba(245,208,0,0.2)' }}><span className="swatch-tip">Amarillo</span></div>
                        <div className="swatch" style={{ background: '#E8430A', width: '40px', height: '40px', borderRadius: '50%' }}><span className="swatch-tip">Rojo</span></div>
                        <div className="swatch" style={{ background: '#0057A0', width: '40px', height: '40px', borderRadius: '50%' }}><span className="swatch-tip">Azul</span></div>
                    </div>
                </div>

                {/* IMAGEN: LADO DERECHO (Con tu radio de 48px) */}
                <div className="s3-img-side reveal-right" style={{
                    flex: '1 1 450px',
                    backgroundColor: '#0a0a0a', /* 👇 1. Agregamos el fondo oscuro */
                    padding: '80px 40px',       /* 👇 2. Agregamos el padding para "achicar" la camiseta */
                    borderRadius: '48px',
                    display: 'flex',            /* 👇 3. Centramos la imagen perfectamente */
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <Image
                        src="/imagenes/img2.png"
                        alt="Camiseta Frontal"
                        width={600}
                        height={800}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain', /* 👇 4. Esto evita que se corte el cuello */
                            display: 'block'
                        }}
                    />
                </div>

                {/* LETRA C GIGANTE DE FONDO */}
                <div className="big-bg" style={{ position: 'absolute', right: '5%', bottom: '-5%', fontSize: '25vw', opacity: 0.03, zIndex: -1, fontWeight: 'bold', lineHeight: 1 }}>C</div>
        </section>
    );
}