
import { FaDownload } from 'react-icons/fa6';

import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return (
        <div id="about-section" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">SOBRE MIM</h2>
                    <p className="about-subtitle">Um pouco sobre mim</p>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-description">
                        <p>
                            Sou <strong className='about-nome'>Wendson Magalhães</strong>, <strong>Desenvolvedor Web Full Stack</strong> com forte atuação prática no desenvolvimento
                            de aplicações modernas, performáticas e seguras. Tenho formação em <strong>Ciência da Computação</strong> pela <strong>UFCG </strong>
                            e experiência sólida com tecnologias como <strong>Node.js</strong>, <strong>React</strong>, <strong>SQL</strong> e <strong>integrações com APIs</strong>,
                            atuando desde a concepção até a entrega de soluções web escaláveis e responsivas.
                        </p>
                        <p>
                            Tenho experiência prática no desenvolvimento sistemas internos e ferramentas
                            de automação que otimizam operações, reduzem retrabalho e aumentam a produtividade.
                            Ao longo da jornada, participei do desenvolvimento de mais de 10 aplicações web e atuei
                            com dados em larga escala utilizando <strong>SQL Server</strong> e <strong>Power BI</strong>, sempre com foco em usabilidade,
                            desempenho e análise de resultados.
                        </p>
                        <p>
                            Além da parte técnica, tenho experiência em áreas estratégicas como back office,
                            análise de dados e liderança de equipes em call center, o que me proporciona uma
                            visão ampla de negócios e um olhar voltado à resolução de problemas reais.
                        </p>
                        <p>
                            Meu objetivo é seguir evoluindo como desenvolvedor full stack,
                            contribuindo para projetos desafiadores e colaborando com equipes
                            multidisciplinares na criação de soluções que geram valor e impacto.


                        </p>
                    </div>

                    <div className="about-info">
                        <ul>
                            <li><strong>Nome: </strong> Wendson Magalhães da Silva</li>
                            <li><strong>Email: </strong> wendson.silva@ccc.ufcg.edu.br</li>
                            <li><strong>Idade: </strong> 36 anos</li>
                            <li><strong>Formação: </strong> Bacharel em Ciência da Computação — Jun/2024</li>
                            <li><strong>Formado pela: </strong> Universidade Federal de Campina Grande (UFCG)</li>
                            <li><strong>Cidade: </strong> Campina Grande — Paraíba</li>
                        </ul>
                        <div className='about-containet-btn'>
                            <a
                                href="https://drive.google.com/file/d/1jHgCqU8XQp-c57Tb4SGrVji5IZqxByIu/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-cv"
                            >
                                <FaDownload className="icon-btn-cv" /> Ver Currículo
                            </a>


                            <button className="btn-whatsapp" onClick={() => window.open("https://wa.me/seunumerocomddd", "_blank")}>
                                Contato via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
