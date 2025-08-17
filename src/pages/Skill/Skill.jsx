
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
                                <FaReact className="icon-skills" />
                                <div className="title-skills">
                                    React</div>
                            </div>
                            <div className="skill-card">
                                <IoLogoNodejs className="icon-skills" />
                                <div className="title-skills">

                                    NodeJS                            </div>

                            </div>
                            <div className="skill-card">
                                <FaNode className="icon-skills" />
                                <div className="title-skills">

                                    Node                            </div>

                            </div>
                            <div className="skill-card">
                                <RiJavascriptFill className="icon-skills" />
                                <div className="title-skills">

                                    JavaScript                            </div>

                            </div>
                            <div className="skill-card">
                                <BiLogoTypescript className="icon-skills" />
                                <div className="title-skills">
                                    Typescript                            </div>

                            </div>
                            <div className="skill-card">
                                <TbBrandReactNative className="icon-skills" />
                                <div className="title-skills">
                                    React Native                            </div>

                            </div>
                            <div className="skill-card">
                                <SiExpress className="icon-skills" />
                                <div className="title-skills">
                                    Express.js                            </div>

                            </div>
                            <div className="skill-card">
                                <TbFileTypeSql className="icon-skills" />
                                <div className="title-skills">
                                    SQL                            </div>

                            </div>
                            <div className="skill-card">
                                <BiLogoPostgresql className="icon-skills" />
                                <div className="title-skills">
                                    PostgreSQL                            </div>

                            </div>
                            <div className="skill-card">
                                <SiSqlite className="icon-skills" />                                 <div className="title-skills">
                                    SQLite                            </div>

                            </div>
                            <div className="skill-card">
                                <SiHtml5 className="icon-skills" />                                 <div className="title-skills">
                                    HTML5                            </div>

                            </div>
                            <div className="skill-card">
                                <SiCss3 className="icon-skills" />                                 <div className="title-skills">
                                    CSS3                            </div>

                            </div>
                            <div className="skill-card">
                                <FaGithubSquare className="icon-skills" />                                 <div className="title-skills">
                                    Git/GitHub                            </div>

                            </div>
                            <div className="skill-card">
                                <SiGooglemaps className="icon-skills" />                                <div className="title-skills">
                                    API Maps                            </div>

                            </div>
                            <div className="skill-card ">
                                <SiGooglesheets className="icon-skills" />                                <div className="title-skills ">
                                    API Sheets                           </div>

                            </div>
                            <div className="skill-card">
                                <RiFileExcel2Fill className="icon-skills" />                                 <div className="title-skills ">
                                    Excel                            </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
