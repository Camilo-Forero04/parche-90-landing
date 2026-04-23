'use client';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    // Reemplaza con tu número de Parche 90 (incluye el 57 de Colombia)
    const phoneNumber = "573000000000";
    const message = "¡Hola! Vengo de la página web y quiero mi camiseta de Colombia.";

    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px', // Abajo a la derecha, donde la gente espera encontrarlo
                backgroundColor: '#25D366', // Verde oficial de WhatsApp
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '35px',
                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)', // Brillo verde premium
                zIndex: 9999, // Asegura que siempre esté por encima de todo
                transition: 'transform 0.3s ease',
            }}
            // Pequeño efecto hover para cuando pasen el mouse
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <FaWhatsapp />

            {/* Opcional: Un puntito rojo de "notificación" para llamar más la atención */}
            <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: '#FF0000',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                border: '2px solid #060606'
            }}></span>
        </a>
    );
}