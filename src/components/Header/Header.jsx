import { useState, useEffect } from 'react';
import './Header.css';
import perfilImg from '../../assets/Perfil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';



export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 992;
            setIsMobile(isNowMobile);
            if (!isNowMobile) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Sidebar fixa no desktop */}
            {!isMobile && (
                <div className="sidebar left">
                    <ToggleTheme />

                    <div className="img-header">
                        <img src={perfilImg} alt="Foto de perfil" className="perfil-img" />
                        <h1 className="nome">Wendson Magalhães</h1>

                    </div>
                    <nav>
                        <a href="#home">Início</a>
                        <a href="#about">Sobre mim</a>
                        <a href="#skill">Serviços</a>
                        <a href="#summary">Resumo</a>
                        <a href="#portfolio">Portfólio</a>
                        <a href="#contact">Contato</a>
                    </nav>
                    <div className="footer-header">
                        <a
                            href="https://github.com/WendsonMagalhaes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} className="icon-header" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wendson-magalh%C3%A3es-18545a1b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="icon-header" />
                        </a>
                    </div>

                </div>
            )}

            {/* Header superior no mobile */}
            {isMobile && (
                <>
                    <div className="top-header">

                        <h1 className="top-nome">Wendson Magalhães</h1>
                        <ToggleTheme />

                        <div className="top-icons">
                            <a
                                href="https://github.com/WendsonMagalhaes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} className="icon-header" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/wendson-magalh%C3%A3es-18545a1b9/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="icon-header" />
                            </a>
                        </div>
                        <button className="button-menu" onClick={() => setMenuOpen(!menuOpen)}>
                            <FontAwesomeIcon icon={faBars} className="icon-header" />
                        </button>
                    </div>

                    {/* Menu flutuante no mobile */}
                    {menuOpen && (
                        <nav className="top-nav">
                            <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
                            <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mim</a>
                            <a href="#skill" onClick={() => setMenuOpen(false)}>Serviços</a>
                            <a href="#summary" onClick={() => setMenuOpen(false)}>Resumo</a>
                            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a>
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
                        </nav>
                    )}
                </>
            )}
        </>
    );
}
