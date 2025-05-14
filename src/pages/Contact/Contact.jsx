import './Contact.css'
import logoTLSecurity from '../../assets/logo-lt-security.png'
import logoGrupoDigna from '../../assets/logo-grupo-digna.png'
import logoAeC from '../../assets/logo-aec.png'

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
    const form = useRef();

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({ type: 'loading', message: 'Enviando mensagem...' });

    const sendEmail = (e) => {
        e.preventDefault();
        setPopupContent({ type: 'loading', message: 'Enviando email...' });
        setPopupOpen(true);

        emailjs.sendForm('service_j5fwi9w', 'template_6nqtzak', form.current, 'xCa4ZsDCqefDnme_E')
            .then((result) => {
                console.log('Mensagem enviada!', result.text);
                setPopupContent({ type: 'success', message: '✅ Email enviado com sucesso!' });
                e.target.reset();

                setTimeout(() => setPopupOpen(false), 3000);
            }, (error) => {
                console.log('Erro:', error.text);
                setPopupContent({ type: 'error', message: '❌ Erro ao enviar. Tente novamente.' });

                setTimeout(() => setPopupOpen(false), 4000);
            });
    };

    return (
        <div id="contact-section" className="contact-section">
            {/* Popup */}
            {popupOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        {popupContent.type === 'loading' && <div className="spinner"></div>}
                        <p>{popupContent.message}</p>
                    </div>
                </div>
            )}

            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">CONTATO</h2>
                    <p className="contact-subtitle">Fale comigo</p>
                    <div className="underline"></div>
                </div>

                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Entra em contato comigo por email</h2>

                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows="5" required />

                            <button type="submit" className="submit-btn">Enviar</button>
                        </form>
                    </div>

                    <div className="contact-whatsapp">
                        <h2>Entra em contato comigo via WhatsApp</h2>
                        <a
                            href="https://wa.me/5599999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
