
import './Skill.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPalette, faDatabase, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiGooglesheets, SiGooglemaps, SiExpress, SiSqlite, SiHtml5, SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative, TbFileTypeSql } from "react-icons/tb";
import { FaNode, FaGithubSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiJavascriptFill, RiFileExcel2Fill } from "react-icons/ri";


export default function Skill() {
    return (
        <div id="skill" className="skill-section">
            <div className="skill-container">
                <div className="skill-header">
                    <h2 className="skill-title">SERVIÇOS</h2>
                    <p className="skill-subtitle">O que eu faço?</p>
                    <div className="underline"></div>
                </div>

                <div className="skill-content">
                    <div className="skill-service">
                        <div className='skill-service-info'>
                            <div className='skill-service-icon-container'>
                                <FontAwesomeIcon icon={faDesktop} className="icon-skill-service" />
                            </div>
                            <div className='skill-service-info-text'>
                                <h4>Web Full Stack</h4>
                                <p>Desenvolvimento completo de aplicações web</p>
                            </div>
                        </div>
                        <div className='skill-service-info'>
                            <div className='skill-service-icon-container'>
                                <FontAwesomeIcon icon={faPalette} className="icon-skill-service" />
                            </div>
                            <div className='skill-service-info-text'>
                                <h4> UI/UX Design</h4>
                                <p>Interfaces intuitivas, responsivas e focadas na melhor experiência do usuário.</p>
                            </div>
                        </div>
                        <div className='skill-service-info'>
                            <div className='skill-service-icon-container'>
                                <FontAwesomeIcon icon={faChartColumn} className="icon-skill-service" />
                            </div>
                            <div className='skill-service-info-text'>
                                <h4>Análise de Dados</h4>
                                <p>Automatização e visualização de dados com SQL, Power BI e Google Sheets para apoiar decisões estratégicas.</p>
                            </div>
                        </div>
                        <div className='skill-service-info'>
                            <div className='skill-service-icon-container'>
                                <FontAwesomeIcon icon={faDatabase} className="icon-skill-service" />
                            </div>
                            <div className='skill-service-info-text'>
                                <h4>Otimização de Bancos de Dados</h4>
                                <p>Melhoria de desempenho em consultas SQL e relatórios com foco em SQL Server e SQLite.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-skills">
                        <div className="skill-header">
                            <h2 className="skill-title">SERVIÇOS</h2>
                            <p className="skill-subtitle">Skills</p>
                            <div className="underline"></div>
                        </div>
                        <div className="skills-container">
                            <div className="skill-card"><FaReact className="icon-skills" />
                                React</div>
                            <div className="skill-card"><IoLogoNodejs className="icon-skills" />
                                NodeJS</div>
                            <div className="skill-card"><FaNode className="icon-skills" />
                                Node</div>
                            <div className="skill-card"><RiJavascriptFill className="icon-skills" />
                                <span>JavaScript</span></div>
                            <div className="skill-card"><BiLogoTypescript className="icon-skills" /> <span>Typescript</span></div>
                            <div className="skill-card"><TbBrandReactNative className="icon-skills" /> <span>React Native</span></div>
                            <div className="skill-card"><SiExpress className="icon-skills" /> <span>Express.js</span></div>
                            <div className="skill-card"><TbFileTypeSql className="icon-skills" /> <span>SQL</span></div>
                            <div className="skill-card"><BiLogoPostgresql className="icon-skills" /> <span>PosygreSQL</span></div>
                            <div className="skill-card"><SiSqlite className="icon-skills" /> <span>SQLite</span></div>
                            <div className="skill-card"><SiHtml5 className="icon-skills" /> <span>HTML5</span></div>
                            <div className="skill-card"><SiCss3 className="icon-skills" /> <span>CSS3</span></div>
                            <div className="skill-card"><FaGithubSquare className="icon-skills" /> <span>Git/GitHub</span></div>
                            <div className="skill-card"><SiGooglemaps className="icon-skills" /> <span>Google Maps API</span></div>
                            <div className="skill-card"><SiGooglesheets className="icon-skills" /> <span>Goglle Sheets API</span></div>
                            <div className="skill-card"><RiFileExcel2Fill className="icon-skills" /> <span>Excel</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
