import './Summary.css'
import logoTLSecurity from '../../assets/logo-lt-security.png'
import logoGrupoDigna from '../../assets/logo-grupo-digna.png'
import logoAeC from '../../assets/logo-aec.png'


export default function Summary() {
    return (
        <div id="summary" className="summary-section">
            <div className="summary-container">

                <div className="summary-header">
                    <h2 className="summary-title">RESUMO</h2>
                    <p className="summary-subtitle">Aonde já trabalhei/Trabalho</p>
                    <div className="underline"></div>
                </div>
                <div className='summary-positions'>
                    <div className="summary-content">
                        <div className='summary-info'>
                            <div className='summary-info-date'>
                                Jun/2023 - Jul/2024
                            </div>
                            <div className='summary-info-logo'>
                                <img src={logoTLSecurity} alt="Logo LT Security" className="logo-lt-img" />
                                <h4>Estagiário de Desenvolvimento Web</h4>

                            </div>

                            <div className='summary-info-description'>
                                <p>Atuação prática e estratégica no desenvolvimento fullstack de aplicações web,
                                    com foco em desempenho, usabilidade e segurança.</p>
                                <ul>
                                    <li>Participação ativa no desenvolvimento e manutenção de mais de 10 aplicações web responsivas,
                                        utilizando Node.js, com foco em performance e experiência de usuário otimizada para múltiplos dispositivos.
                                    </li>
                                    <li>   Gerenciamento e otimização de views em bancos de dados relacionais, resultando em consultas mais rápidas
                                        e eficientes para suporte a dashboards analíticos e relatórios gerenciais.
                                    </li>
                                    <li>    Implementação de testes unitários e de usabilidade, contribuindo para maior estabilidade,
                                        qualidade e redução de bugs nas entregas.
                                    </li>
                                    <li>    Integração eficiente entre front-end e back-end, com uso de protocolos seguros (HTTPS/REST) e autenticação (JWT),
                                        garantindo segurança de dados e integridade na comunicação entre sistemas.
                                    </li>
                                    <li>   Vivência prática em boas práticas de desenvolvimento, versionamento com Git,
                                        metodologias ágeis e colaboração em equipe técnica multidisciplinar.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='summary-info'>
                            <div className='summary-info-date'>
                                Out/2017 - Jan/2025
                            </div>
                            <div className='summary-info-logo'>
                                <img src={logoGrupoDigna} alt="Logo Grupo Digna" className="logo-grupo-digna-img" />
                                <h4>Assistente de Back Office – Setor de Cobrança / Análise de Dados</h4>

                            </div>

                            <div className='summary-info-description'>
                                <p>Atuação estratégica no suporte à equipe de call center, com foco em otimização de processos,
                                    automação de tarefas e análise de dados para tomada de decisão.</p>
                                <ul>
                                    <li>Responsável por alcançar mais de 80% de cobertura da base inadimplente e 90%
                                        de eficiência na recuperação de clientes, por meio de apoio direto às equipes de cobrança.
                                    </li>
                                    <li>Criação e manutenção de views em SQL Server para alimentar dashboards no Power BI,
                                        permitindo monitoramento em tempo real de KPIs operacionais.
                                    </li>
                                    <li>Desenvolvimento de aplicações web internas, utilizando Node.js,
                                        SQL e integração com a API do Google Sheets, para automatizar tarefas manuais repetitivas,
                                        como preenchimento de planilhas e relatórios.
                                    </li>
                                    <li>Aumento significativo na produtividade da equipe e redução de erros operacionais,
                                        proporcionando mais agilidade e precisão na coleta e análise de dados.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='summary-info'>
                            <div className='summary-info-date'>
                                Abr/2013 - Mar/2016
                            </div>
                            <div className='summary-info-logo'>
                                <img src={logoAeC} alt="Logo AeC" className="logo-aec-img" />
                                <h4>Supervisor de Operações – Call Center</h4>

                            </div>

                            <div className='summary-info-description'>

                                <p>
                                    Responsável pela supervisão de uma equipe de retenção com 25 colaboradores, atuando diretamente no acompanhamento
                                    de indicadores de desempenho, treinamento contínuo da equipe e suporte estratégico para garantir a excelência no atendimento ao cliente.
                                </p>
                                <ul>
                                    <li>Monitoramento de metas e produtividade individual e coletiva.</li>

                                    <li>Apoio à equipe de retenção com informações e direcionamentos em tempo real.</li>

                                    <li>Desenvolvimento de estratégias para redução de cancelamentos e aumento da satisfação dos clientes.</li>

                                    <li>Interface com setores internos para resolução de demandas e melhoria nos processos operacionais.</li>

                                    <li>Contribuição ativa na formação de talentos, promovendo um ambiente colaborativo e focado em resultados.</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
