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
        type: 'Sistema Web e Aplicativo',
        description: 'Sistema inteligente de marcação de ponto externo com registro via GPS, ideal para equipes em campo.',
        technologies: 'React.js, React Native, Node.js, Express, PostgreSQL, Google Maps API, JWT/Firebase Auth',
        date: 'Mai 2025',
        url: 'https://andarilho.com.br',
        images: [imgAndarilho],
    }
    ,
    {
        id: 2,
        name: 'CheckFly',
        type: 'Sistema Web e Aplicativo',
        description: 'Sistema de gerenciamento de tarefas com suporte a subtarefas, listas personalizadas, favoritos e progresso visual. Permite criar, agendar e acompanhar atividades com foco em produtividade e organização.',
        technologies: 'React.js, Node.js, Express, TypeScript, PostgreSQL, Tailwind CSS, @tabler/icons-react',
        date: 'Jul 2024',
        url: 'https://checkfly.com.br',
        images: [imgCheckFly],
    }
    ,
    {
        id: 3,
        name: 'Shopper Driver',
        type: 'Sistema Web',
        description: 'Sistema de mobilidade inspirado em apps como Uber e 99, com foco exclusivo na experiência do passageiro. Permite solicitação de corridas com visualização de rotas e endereços via Google Maps.',
        technologies: 'React.js, Node.js, Express, TypeScript, SQLite, Google Maps API',
        date: 'Mai 2025',
        url: 'https://shopperdriver.com.br',
        images: [imgShopperDriver],
    }
    ,
    {
        id: 4,
        name: 'Digna Melius',
        type: 'Sistema Web',
        description: 'Sistema completo para registro, gerenciamento e tratativa de reclamações. Conta com telas de login, registro, acompanhamento e dashboard analítico.',
        technologies: 'React.js, Node.js, Express, PostgreSQL, Google Sheets API (versão inicial)',
        date: 'Out 2024',
        url: 'https://dignamelius.com.br',
        images: [imgDignaMelius],
    }
    ,
    {
        id: 5,
        name: 'Intra Digna',
        type: 'Sistema Web',
        description: 'Sistema de intranet desenvolvido para centralizar informações, documentos e comunicados internos da empresa, com interface moderna e acessível.',
        technologies: 'React.js,  Node.js',
        date: 'Abr 2024',
        url: 'https://intradigna.com.br',
        images: [imgIntraDigna],
    }
    ,
    {
        id: 6,
        name: 'Registra Aí Boy',
        type: 'Sistema Web e Aplicativo',
        description: 'Aplicação para motoboys cobradores registrarem negociações realizadas com clientes durante cobranças, com funcionalidades de autenticação, autorização e gestão de descontos.',
        technologies: 'React.js, React Native, Node.js, PostgreSQL, JWT',
        date: 'Jun 2024',
        url: 'https://registraaiboy.com.br',
        images: [imgRegistraAiBoy],
    }
    ,
];

export default function Portfolio() {
    const [filter, setFilter] = useState('Todos');
    const filteredProjects = filter === 'Todos'
        ? projects
        : projects.filter(p => {
            // Verifica se o tipo do projeto é "Sistema Web e Aplicativo"
            if (p.type === 'Sistema Web e Aplicativo') {
                // Se o tipo for "Sistema Web e Aplicativo", verificamos se o filtro contém qualquer uma das palavras
                return p.type.toLowerCase().includes(filter.toLowerCase());
            } else {
                // Caso contrário, verifica diretamente o tipo do projeto com o filtro
                return p.type.toLowerCase().includes(filter.toLowerCase());
            }
        });
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
                                <div className="tech-tags">
                                    {project.technologies.split(', ').map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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
