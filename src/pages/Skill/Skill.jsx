
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
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <FaReact className="icon-skills" />
                                React

                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <IoLogoNodejs className="icon-skills" />
                                NodeJS
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <FaNode className="icon-skills" />
                                Node

                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <RiJavascriptFill className="icon-skills" />
                                JavaScript

                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <BiLogoTypescript className="icon-skills" /> Typescript
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <TbBrandReactNative className="icon-skills" /> React Native
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiExpress className="icon-skills" /> Express.js
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <TbFileTypeSql className="icon-skills" /> SQL
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <BiLogoPostgresql className="icon-skills" /> PosygreSQL
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiSqlite className="icon-skills" /> SQLite
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiHtml5 className="icon-skills" /> HTML5

                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiCss3 className="icon-skills" /> CSS3
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <FaGithubSquare className="icon-skills" /> Git/GitHub
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiGooglemaps className="icon-skills" /> Google Maps API
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <SiGooglesheets className="icon-skills" /> Goglle Sheets API
                            </div>
                            <div className="skill-card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <RiFileExcel2Fill className="icon-skills" /> Excel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
