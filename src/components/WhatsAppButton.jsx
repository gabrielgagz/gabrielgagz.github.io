import './WhatsAppButton.css';
import { MessageCircle } from 'lucide-react';

const whatsappText = {
    en: {
        message: 'Hi Gabriel! I saw your portfolio...',
        aria: 'Contact via WhatsApp',
        tooltip: 'Message me!',
    },
    es: {
        message: 'Hola Gabriel! Vi tu portfolio...',
        aria: 'Contactar por WhatsApp',
        tooltip: '¡Escríbeme!',
    },
};

const WhatsAppButton = ({ language }) => {
    // Numero provisto por el usuario
    const phoneNumber = "2914723804";
    const t = whatsappText[language] ?? whatsappText.en;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label={t.aria}
        >
            <div className="whatsapp-icon-wrapper">
                <MessageCircle size={28} />
            </div>
            <span className="whatsapp-tooltip">{t.tooltip}</span>
        </a>
    );
};

export default WhatsAppButton;
