import { useState } from 'react';
import './Portfolio.css';
import imgAndarilho from '../../assets/andarilho.png';
import imgCheckFly from '../../assets/checkfly.png';
import imgShopperDriver from '../../assets/shopper-driver.png';
import imgDignaMelius from '../../assets/digna-melius.png';
import imgRegistraAiBoy from '../../assets/registra-ai-boy.png';
import imgIntraDigna from '../../assets/intra-digna.png';
import { FaAngleLeft } from "react-icons/fa";

import { FaAngleRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        name: 'Andarilho',
        type: 'Sistema Web',
        description: 'Sistema de segurança e monitoramento.',
        technologies: 'React, Node.js, MongoDB',
        date: 'Jan 2023',
        url: 'https://ltsecurity.com.br',
        images: [imgAndarilho],
    },
    {
        id: 2,
        name: 'CheckFlly',
        type: 'Sistema Web',
        description: 'Plataforma de gestão financeira.',
        technologies: 'React, SQL Server, Express',
        date: 'Mar 2023',
        url: 'https://grupodigna.com.br',
        images: [imgCheckFly],
    },
    {
        id: 3,
        name: 'Shopper Driver',
        type: 'Aplicativo',
        description: 'Aplicativo de comunicação interna.',
        technologies: 'React Native, Firebase',
        date: 'Mai 2023',
        url: 'https://aec.com.br/app',
        images: [imgShopperDriver],
    },
    {
        id: 4,
        name: 'Digna Melius',
        type: 'Aplicativo',
        description: 'Aplicativo de comunicação interna.',
        technologies: 'React Native, Firebase',
        date: 'Mai 2023',
        url: 'https://aec.com.br/app',
        images: [imgDignaMelius],
    },
    {
        id: 5,
        name: 'Intra Digna',
        type: 'Sistema Web',
        description: 'Sistema de segurança e monitoramento.',
        technologies: 'React, Node.js, MongoDB',
        date: 'Jan 2023',
        url: 'https://ltsecurity.com.br',
        images: [imgIntraDigna],
    },
    {
        id: 6,
        name: 'Registra aí Boy',
        type: 'Sistema Web',
        description: 'Sistema de segurança e monitoramento.',
        technologies: 'React, Node.js, MongoDB',
        date: 'Jan 2023',
        url: 'https://ltsecurity.com.br',
        images: [imgRegistraAiBoy],
    },
];

export default function Portfolio() {
    const [filter, setFilter] = useState('Todos');
    const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.type === filter);
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Função para abrir o projeto
    const openProject = (index) => {
        setSelectedIndex(index);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedIndex(null);
    };

    // Função para navegar entre os projetos (próximo)
    const nextProject = () => {
        setSelectedIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : prev));
    };

    // Função para navegar entre os projetos (anterior)
    const prevProject = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const selectedProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null;

    return (
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2 className="portfolio-title">PORTFÓLIO</h2>
                    <p className="portfolio-subtitle">Meus trabalhos (Freelances)</p>
                    <div className="underline"></div>
                </div>

                <div className="portfolio-filter">
                    {['Todos', 'Sistema Web', 'Aplicativo'].map((option) => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            className={filter === option ? 'active' : ''}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`portfolio-card card${index + 1}`}
                            onClick={() => openProject(index)} // Abre o projeto ao clicar
                        >
                            <img src={project.images[0]} alt={project.name} />
                            <div className="card-overlay">
                                <h3>{project.name}</h3>
                                <p>{project.type}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal de visualização do projeto selecionado */}
                {selectedProject && (
                    <div className="portfolio-modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>
                                ×
                            </button>
                            <div className="modal-conteudo">
                                {/* Navegação entre projetos */}
                                <div className='modal-nav'>
                                    <button className="btn-nav left" onClick={prevProject}>
                                        <FaAngleLeft />
                                    </button>
                                </div>

                                <div className="modal-gallery">
                                    {selectedProject.images.map((img, i) => (
                                        <img key={i} src={img} alt="screenshot" />
                                    ))}
                                </div>

                                <div className="modal-info">
                                    <h2>{selectedProject.name}</h2>
                                    <p>
                                        <strong>Tipo:</strong> {selectedProject.type}
                                    </p>
                                    <p>
                                        <strong>Descrição:</strong> {selectedProject.description}
                                    </p>
                                    <p>
                                        <strong>Tecnologias:</strong> {selectedProject.technologies}
                                    </p>
                                    <p>
                                        <strong>Data:</strong> {selectedProject.date}
                                    </p>
                                    <p>
                                        <strong>URL:</strong>{' '}
                                        <a href={selectedProject.url} target="_blank" rel="noreferrer">
                                            {selectedProject.url}
                                        </a>
                                    </p>
                                </div>
                                <div className='modal-nav'>
                                    <button className="btn-nav right" onClick={nextProject}>
                                        <FaAngleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
