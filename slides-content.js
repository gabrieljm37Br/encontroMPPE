// Slide content data
const slidesData = [
    {
        id: 1,
        html: `
            <div class="slide-content title-slide">
                <div class="title-content">
                    <div class="logo-container">
                        <img src="./image/logo_MPPE.svg" alt="Ministério Público de Pernambuco" class="institution-logo">
                        <div class="logo-divider"></div>
                        <img src="./image/logo_PCPE.svg" alt="Polícia Civil de Pernambuco" class="institution-logo">
                    </div>
                    <h1 class="main-title">Encontro Interinstitucional</h1>
                    <h2 class="subtitle">MPPE / PCPE</h2>
                    <div class="title-decoration"></div>
                    <p class="title-description">Fortalecimento da cooperação e alinhamento estratégico</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Objetivo do Encontro</h2>
                <div class="content-box">
                    <p class="lead-text">O presente encontro interinstitucional tem por finalidade promover o diálogo qualificado, o alinhamento estratégico e o fortalecimento da cooperação entre membros e servidores do Ministério Público de Pernambuco e Delegados da Polícia Civil de Pernambuco.</p>
                    <div class="objectives-grid">
                        <div class="objective-card">
                            <div class="objective-icon">🎯</div>
                            <h3>Aprimorar Fluxos</h3>
                            <p>Otimização dos processos de trabalho conjunto</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">📋</div>
                            <h3>Padronizar Práticas</h3>
                            <p>Uniformização de procedimentos institucionais</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">🤝</div>
                            <h3>Compartilhar Diagnósticos</h3>
                            <p>Troca de informações e experiências</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">⚡</div>
                            <h3>Identificar Melhorias</h3>
                            <p>Oportunidades de aperfeiçoamento contínuo</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 3,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Áreas de Atuação Conjunta</h2>
                <div class="content-box">
                    <div class="areas-list">
                        <div class="area-item">
                            <div class="area-number">01</div>
                            <div class="area-content">
                                <h3>Investigação Criminal</h3>
                                <p>Coordenação e execução de investigações complexas com metodologia integrada</p>
                            </div>
                        </div>
                        <div class="area-item">
                            <div class="area-number">02</div>
                            <div class="area-content">
                                <h3>Análise Pré-Processual</h3>
                                <p>Avaliação técnica e jurídica dos elementos investigativos antes da denúncia</p>
                            </div>
                        </div>
                        <div class="area-item">
                            <div class="area-number">03</div>
                            <div class="area-content">
                                <h3>Persecução Penal</h3>
                                <p>Atuação coordenada na fase processual para efetividade da justiça criminal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 4,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Consolidação de Cultura Institucional</h2>
                <div class="content-box">
                    <div class="culture-pillars">
                        <div class="pillar">
                            <div class="pillar-icon">🔗</div>
                            <h3>Integração</h3>
                            <p>Trabalho conjunto e articulado entre as instituições</p>
                        </div>
                        <div class="pillar">
                            <div class="pillar-icon">🔍</div>
                            <h3>Transparência</h3>
                            <p>Clareza nos processos e comunicação aberta</p>
                        </div>
                        <div class="pillar">
                            <div class="pillar-icon">⚙️</div>
                            <h3>Eficiência</h3>
                            <p>Respostas céleres, técnicas e coordenadas</p>
                        </div>
                    </div>
                    <div class="culture-goal">
                        <p><strong>Objetivo Central:</strong> Fortalecer a articulação institucional, aperfeiçoar mecanismos de comunicação, superar gargalos operacionais e estabelecer soluções práticas que elevem a qualidade das investigações e da atuação ministerial.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">O que é a Fase Pré-Processual?</h2>
                <div class="content-box">
                    <div class="definition-box">
                        <p class="lead-text">Momento <strong>anterior ao oferecimento da denúncia</strong>, desenvolvido por meio de:</p>
                        <div class="methods">
                            <div class="method-badge">Inquérito Policial</div>
                            <div class="method-badge">Peças de Informação</div>
                        </div>
                    </div>
                    <div class="importance-section">
                        <h3>Por que ela importa?</h3>
                        <div class="importance-grid">
                            <div class="importance-item">
                                <span class="importance-label">Formação da Opinio Delicti</span>
                                <p>Construção da convicção mínima necessária para atuação do MP</p>
                            </div>
                            <div class="importance-item">
                                <span class="importance-label">Decisões Possíveis</span>
                                <ul>
                                    <li>Oferecer denúncia</li>
                                    <li>Propor ANPP</li>
                                    <li>Requerer diligências</li>
                                    <li>Promover arquivamento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="highlight-box">
                        <p><strong>Objetivo Central:</strong> Verificar se existem elementos mínimos de autoria e materialidade que justifiquem submeter alguém a um processo penal.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Fundamentação Constitucional e Legal</h2>
                <div class="content-box">
                    <div class="legal-section">
                        <h3 class="legal-title">Constituição Federal (art. 129)</h3>
                        <div class="legal-items">
                            <div class="legal-item">
                                <span class="legal-article">Art. 129, I</span>
                                <p>Promover, privativamente, a ação penal pública</p>
                            </div>
                            <div class="legal-item">
                                <span class="legal-article">Art. 129, VII</span>
                                <p>Exercer o controle externo da atividade policial</p>
                            </div>
                            <div class="legal-item">
                                <span class="legal-article">Art. 129, VI e VIII</span>
                                <p>Expedir notificações; requisitar diligências investigatórias e instauração de inquérito</p>
                            </div>
                        </div>
                    </div>
                    <div class="legal-section">
                        <h3 class="legal-title">Código de Processo Penal</h3>
                        <div class="cpp-grid">
                            <div class="cpp-item">Art. 5º, II - Requisição de inquérito</div>
                            <div class="cpp-item">Art. 13, II e III - Requisição de diligências</div>
                            <div class="cpp-item">Art. 16 - Diligências complementares</div>
                            <div class="cpp-item">Art. 28 - Arquivamento</div>
                            <div class="cpp-item">Arts. 282, 311, 312, 319 - Medidas cautelares</div>
                            <div class="cpp-item">Art. 28-A - ANPP</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 7,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Objetivos da Atuação do MP</h2>
                <div class="content-box">
                    <div class="objectives-detailed">
                        <div class="objective-detailed">
                            <div class="objective-header">
                                <span class="objective-number">1</span>
                                <h3>Garantir Justa Causa</h3>
                            </div>
                            <ul>
                                <li>Materialidade do delito</li>
                                <li>Indícios suficientes de autoria</li>
                                <li>Adequação típica</li>
                            </ul>
                        </div>
                        <div class="objective-detailed">
                            <div class="objective-header">
                                <span class="objective-number">2</span>
                                <h3>Filtrar Casos</h3>
                            </div>
                            <ul>
                                <li>Evitar processos desnecessários</li>
                                <li>Direcionar para soluções negociadas</li>
                                <li>Priorizar situações graves</li>
                            </ul>
                        </div>
                        <div class="objective-detailed">
                            <div class="objective-header">
                                <span class="objective-number">3</span>
                                <h3>Proteger Direitos</h3>
                            </div>
                            <ul>
                                <li>Legalidade das prisões</li>
                                <li>Licitude das provas</li>
                                <li>Proteção de vítimas</li>
                                <li>Proporcionalidade</li>
                            </ul>
                        </div>
                        <div class="objective-detailed">
                            <div class="objective-header">
                                <span class="objective-number">4</span>
                                <h3>Assegurar Efetividade</h3>
                            </div>
                            <ul>
                                <li>Medidas cautelares adequadas</li>
                                <li>Preservação de vestígios</li>
                                <li>Garantia de reparação</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Principais Atos do MP</h2>
                <div class="content-box">
                    <div class="acts-timeline">
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Análise de Comunicações de Prisão</h3>
                                <p>Verificação da legalidade, conversão em preventiva ou liberdade provisória</p>
                            </div>
                        </div>
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Requisição de Inquérito</h3>
                                <p>Instauração de procedimentos investigatórios e coleta de documentos</p>
                            </div>
                        </div>
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Requisição de Diligências</h3>
                                <p>Oitivas, perícias, buscas, quebras de sigilo</p>
                            </div>
                        </div>
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Medidas Cautelares</h3>
                                <p>Prisões, medidas alternativas e medidas reais</p>
                            </div>
                        </div>
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Proposta de ANPP</h3>
                                <p>Acordo de Não Persecução Penal</p>
                            </div>
                        </div>
                        <div class="act-item">
                            <div class="act-marker"></div>
                            <div class="act-content">
                                <h3>Decisão Final</h3>
                                <p>Denúncia, arquivamento, ANPP ou novas diligências</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 9,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Centrais de Inquérito - MPPE</h2>
                <div class="content-box">
                    <div class="cic-intro">
                        <p class="lead-text">Órgãos compostos por <strong>Promotores de Justiça</strong> com atribuições específicas na fase pré-processual</p>
                    </div>
                    <div class="cic-functions">
                        <h3>Funções Principais</h3>
                        <div class="function-grid">
                            <div class="function-card">
                                <div class="function-icon">📨</div>
                                <p>Receber comunicações de prisão em flagrante</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">⚖️</div>
                                <p>Representar ao juiz requerendo prisões</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">📋</div>
                                <p>Formular medidas processuais</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">🔍</div>
                                <p>Requerer peças de informação</p>
                            </div>
                        </div>
                    </div>
                    <div class="cic-highlight">
                        <p><strong>Coração Operacional:</strong> Centro da atuação pré-processual do MP na Capital</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 10,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Fluxo de Procedimentos na CIC</h2>
                <div class="content-box">
                    <div class="flow-steps">
                        <div class="flow-step">
                            <div class="step-header">
                                <span class="step-number">Etapa 1</span>
                                <h3>Entrada de Autos</h3>
                            </div>
                            <div class="step-content">
                                <p><strong>O que chega:</strong></p>
                                <ul>
                                    <li>Comunicações de prisão em flagrante</li>
                                    <li>Autos de inquérito, TCO, peças de informação</li>
                                    <li>Integração via PJe, SIM, Consensus</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flow-step">
                            <div class="step-header">
                                <span class="step-number">Etapa 2</span>
                                <h3>Triagem</h3>
                            </div>
                            <div class="step-content">
                                <p><strong>Objetivo:</strong> Classificar e qualificar cada procedimento</p>
                                <ul>
                                    <li>Verificação de competência</li>
                                    <li>Completude de dados</li>
                                    <li>Status do investigado (preso/solto)</li>
                                    <li>Verificação de prevenção</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flow-step">
                            <div class="step-header">
                                <span class="step-number">Etapa 3</span>
                                <h3>Cadastro e Distribuição</h3>
                            </div>
                            <div class="step-content">
                                <ul>
                                    <li>Cadastro no Consensus</li>
                                    <li>Vinculação a autos anteriores</li>
                                    <li>Distribuição ao NPP ou NANPP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 11,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Núcleos - NPP e NANPP</h2>
                <div class="content-box">
                    <div class="nucleos-container">
                        <div class="nucleo-box npp">
                            <div class="nucleo-header">
                                <h3>NPP - Núcleo de Persecução Penal</h3>
                            </div>
                            <div class="nucleo-content">
                                <p class="nucleo-focus">Foco: <strong>Denúncia Tradicional</strong></p>
                                <h4>Funções:</h4>
                                <ul>
                                    <li>Análise técnica do inquérito</li>
                                    <li>Requisição de diligências</li>
                                    <li>Preparação de denúncia</li>
                                    <li>Avaliação de medidas cautelares</li>
                                    <li>Interação com Judiciário</li>
                                </ul>
                            </div>
                        </div>
                        <div class="nucleo-box nanpp">
                            <div class="nucleo-header">
                                <h3>NANPP - Acordo de Não Persecução Penal</h3>
                            </div>
                            <div class="nucleo-content">
                                <p class="nucleo-focus">Foco: <strong>Função Consensual</strong></p>
                                <h4>Funções:</h4>
                                <ul>
                                    <li>Identificar casos cabíveis</li>
                                    <li>Realizar audiência de ANPP</li>
                                    <li>Elaborar petição de homologação</li>
                                    <li>Acompanhar cumprimento</li>
                                    <li>Informar cumprimento/descumprimento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 12,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Controle e Comunicação</h2>
                <div class="content-box">
                    <div class="control-section">
                        <h3>Controle de Prazos</h3>
                        <div class="prazos-grid">
                            <div class="prazo-item">Remessa de inquéritos</div>
                            <div class="prazo-item">Respostas a requisições</div>
                            <div class="prazo-item">Retornos de diligências</div>
                        </div>
                    </div>
                    <div class="communication-section">
                        <h3>Comunicação Externa</h3>
                        <div class="comm-partners">
                            <div class="partner-badge">Polícia Civil</div>
                            <div class="partner-badge">TJPE</div>
                            <div class="partner-badge">Corregedorias SDS</div>
                            <div class="partner-badge">CEAPA</div>
                            <div class="partner-badge">PGJ e CGMP</div>
                        </div>
                    </div>
                    <div class="conclusion-box">
                        <h3>Importância do Controle</h3>
                        <p>Essencial para evitar <strong>nulidades</strong>, <strong>ilegalidades</strong> e <strong>prescrição</strong></p>
                    </div>
                    <div class="final-message">
                        <h2>Juntos por uma Justiça Criminal mais Eficiente</h2>
                        <p>MPPE • PCPE</p>
                    </div>
                </div>
            </div>
        `
    }
];

// Initialize slides on page load
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('slidesWrapper');
    slidesData.forEach((slide, index) => {
        const section = document.createElement('section');
        section.className = `slide ${index === 0 ? 'active' : ''}`;
        section.dataset.slide = slide.id;
        section.innerHTML = slide.html;
        wrapper.appendChild(section);
    });
});

