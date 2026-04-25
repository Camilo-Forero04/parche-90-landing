export default function TechSection() {
    return (
        <section className="scene" id="s2" style={{ padding: '60px 20px' }}>
            <div className="s2-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>

                {/* IMAGEN: LADO IZQUIERDO */}
                <div className="s2-img-side" style={{ flex: '1 1 450px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', lineHeight: 0 }}>
                    <img src="/imagenes/img3.png" alt="Tecnología Mesh" style={{ width: '100%' }} />
                </div>

                {/* TEXTO: LADO DERECHO */}
                <div className="s2-text" style={{ flex: '1 1 400px' }}>
                    <p className="badge" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        01 · Rendimiento
                    </p>
                    <div className="yr" style={{ margin: '15px 0' }}></div>

                    <h2 className="sec-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '0.9', marginBottom: '25px' }}>
                        HECHA PARA USARSE.<br />
                        <span style={{ color: '#F5D000' }}>Y PARA QUE SE NOTE.</span>
                    </h2>

                    <div className="sec-body" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', opacity: 0.9, lineHeight: '1.6', marginBottom: '25px' }}>
                        <p style={{ marginBottom: '15px' }}>
                            Tela ligera que respira contigo.<br />
                            <strong>No se pega, no pesa, no incomoda.</strong>
                        </p>

                        <p style={{ marginBottom: '15px' }}>
                            Se ve bien en fotos. Se siente bien todo el día.<br />
                            <strong style={{ color: '#F5D000' }}>No parece una réplica barata.</strong>
                        </p>

                        <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: 'clamp(15px, 1.4vw, 18px)', borderLeft: '2px solid #F5D000', paddingLeft: '15px' }}>
                            La usas para jugar… o para salir. Funciona igual de bien.
                        </p>
                    </div>

                    <div className="pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <span className="pill">No da calor ni bajo el sol</span>
                        <span className="pill">Se siente premium al tacto</span>
                        <span className="pill">No pierde forma con las lavadas</span>
                    </div>
                </div>
            </div>
        </section>
    );
}