import './Contact.css'
import logoTLSecurity from '../../assets/logo-lt-security.png'
import logoGrupoDigna from '../../assets/logo-grupo-digna.png'
import logoAeC from '../../assets/logo-aec.png'


export default function Contact() {
    return (
        <div id="contact-section" className="contact-section">
            <div className="contact-container">

                <div className="contact-header">
                    <h2 className="contact-title">CONTATO</h2>
                    <p className="contact-subtitle">Fale comigo</p>
                    <div className="underline"></div>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Entra em contato comigo por email</h2>

                        <form onSubmit={(e) => e.preventDefault()}>
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
                        <h2>Entra em contato comigo vai Whastapp</h2>
                        <a
                            href="https://wa.me/5599999999999" // coloque seu número aqui com DDI
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
