import './WhatsAppButton.css';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    // Numero provisto por el usuario
    const phoneNumber = "2914723804";
    // Si necesitas pre-escribir un mensaje, podes agregarlo en &text=Hola
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola%20Gabriel!%20Vi%20tu%20portfolio...`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Contactar por WhatsApp"
        >
            <div className="whatsapp-icon-wrapper">
                <MessageCircle size={28} />
            </div>
            <span className="whatsapp-tooltip">¡Escríbeme!</span>
        </a>
    );
};

export default WhatsAppButton;
