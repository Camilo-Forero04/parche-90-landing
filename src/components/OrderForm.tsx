'use client';
import { useState } from 'react';

export default function OrderForm() {
    // ESTADOS PARA GUARDAR LA INFO DEL CLIENTE
    const [genero, setGenero] = useState(''); // <-- Nuevo estado para género
    const [talla, setTalla] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [barrio, setBarrio] = useState('');

    // FUNCIÓN QUE ARMA EL MENSAJE Y ABRE WHATSAPP
    const enviarPedido = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que la página recargue

        // Validaciones
        if (!genero) {
            alert('Por favor selecciona si es para Hombre o Mujer antes de continuar.');
            return;
        }
        if (!talla) {
            alert('Por favor selecciona una talla antes de continuar.');
            return;
        }

        // Tu número de WhatsApp de Parche 90
        const numeroWhatsApp = "573000000000";

        // Armamos el texto que te va a llegar
        const texto = `🔥 *NUEVO PEDIDO - PARCHE 90* 🔥\n\n` +
            `👕 *Producto:* Camiseta Colombia 2026 (Versión Jugador)\n` +
            `🚻 *Género:* ${genero}\n` + // <-- Agregado al mensaje
            `📏 *Talla:* ${talla}\n` +
            `👤 *Nombre:* ${nombre}\n` +
            `📞 *Teléfono:* ${telefono}\n` +
            `📍 *Dirección:* ${direccion}\n` +
            `🏘️ *Barrio/Ciudad:* ${barrio}\n\n` +
            `💰 *Total a pagar al recibir:* $129.900`;

        // Codificamos el texto para que funcione en la URL
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        // Abrimos WhatsApp
        window.open(url, '_blank');
    };

    return (
        <section id="formulario" style={{ padding: '60px 20px', backgroundColor: '#060606' }}>
            <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#0a0a0a', padding: '40px 30px', borderRadius: '24px', border: '1px solid rgba(245, 208, 0, 0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>

                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '35px', color: 'white', textAlign: 'center', marginBottom: '10px' }}>
                    QUIERO LA <span style={{ color: '#F5D000' }}>MÍA</span>
                </h3>
                <p style={{ color: '#aaa', textAlign: 'center', fontSize: '14px', marginBottom: '30px' }}>
                    Un paso más y es tuya<br />
                    Pagas cuando la recibes. Sin riesgo.
                </p>

                <form onSubmit={enviarPedido} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* SELECTOR DE GÉNERO */}
                    <div>
                        <label style={labelStyle}>1. ¿Para Hombre o Mujer? *</label>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                            {['Hombre', 'Mujer'].map((gen) => (
                                <button
                                    key={gen}
                                    type="button"
                                    onClick={() => setGenero(gen)}
                                    style={{
                                        flex: 1,
                                        padding: '12px 0',
                                        backgroundColor: genero === gen ? '#F5D000' : 'transparent',
                                        color: genero === gen ? '#000' : '#fff',
                                        border: `1px solid ${genero === gen ? '#F5D000' : 'rgba(255,255,255,0.2)'}`,
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {gen}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SELECTOR DE TALLAS */}
                    <div>
                        <label style={labelStyle}>2. Selecciona tu talla *</label>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setTalla(size)}
                                    style={{
                                        flex: 1,
                                        padding: '12px 0',
                                        backgroundColor: talla === size ? '#F5D000' : 'transparent',
                                        color: talla === size ? '#000' : '#fff',
                                        border: `1px solid ${talla === size ? '#F5D000' : 'rgba(255,255,255,0.2)'}`,
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DATOS DEL CLIENTE */}
                    <div>
                        <label style={labelStyle}>3. Nombre Completo *</label>
                        <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle} placeholder="Ej. James Rodriguez" />
                    </div>

                    <div>
                        <label style={labelStyle}>4. Número de WhatsApp *</label>
                        <input type="tel" required value={telefono} onChange={(e) => setTelefono(e.target.value)} style={inputStyle} placeholder="Ej. 300 123 4567" />
                    </div>

                    <div>
                        <label style={labelStyle}>5. Dirección de Entrega *</label>
                        <input type="text" required value={direccion} onChange={(e) => setDireccion(e.target.value)} style={inputStyle} placeholder="Ej. Calle 10 # 20-30" />
                    </div>

                    <div>
                        <label style={labelStyle}>6. Barrio / Ciudad *</label>
                        <input type="text" required value={barrio} onChange={(e) => setBarrio(e.target.value)} style={inputStyle} placeholder="Ej. Kennedy, Bogotá" />
                    </div>

                    {/* BOTÓN DE CONFIRMACIÓN */}
                    <button type="submit" style={{
                        marginTop: '10px',
                        padding: '20px',
                        backgroundColor: '#F5D000',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '24px',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 20px rgba(245,208,0,0.2)',
                        transition: 'transform 0.2s ease'
                    }}>
                        CONFIRMAR PEDIDO AHORA
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '12px', opacity: 0.5, marginTop: '-5px' }}>
                        Te escribimos por WhatsApp para confirmar tu pedido.
                    </p>
                </form>
            </div>
        </section>
    );
}

// Estilos compartidos para mantener el código limpio
const labelStyle = {
    fontSize: '12px',
    color: '#F5D000',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '8px'
};

const inputStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    outline: 'none'
};