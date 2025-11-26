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
            <div class="slide-content infographic-slide">
                <div class="infographic-header">
                    <div class="infographic-title-block">
                        <span class="eyebrow">Infográfico operacional</span>
                        <h2 class="slide-title slim-title">Dados da Central de Inquéritos da Capital</h2>
                        <p class="infographic-sub">Panorama do volume recebido, conversão em denúncia e status dos requisitórios.</p>
                    </div>
                    <div class="period-chip">
                        <span class="chip-label">Período</span>
                        <span class="chip-value">01/01/2025 a 25/11/2025</span>
                    </div>
                </div>

                <div class="infographic-grid">
                    <div class="infographic-hero">
                        <div class="hero-circle">
                            <span class="hero-number">10.957</span>
                            <span class="hero-label">Inquéritos movimentados</span>
                        </div>
                        <div class="hero-bars">
                            <div class="hero-bar">
                                <div class="hero-bar-label">
                                    <span>Denúncias oferecidas</span>
                                    <span class="hero-value">8.153</span>
                                </div>
                                <div class="mini-bar">
                                    <div class="mini-fill success" style="--bar-width: 74.4%"></div>
                                </div>
                                <span class="hero-percentage">74,4% do total</span>
                            </div>
                            <div class="hero-bar">
                                <div class="hero-bar-label">
                                    <span>Requisitórios emitidos</span>
                                    <span class="hero-value">451</span>
                                </div>
                                <div class="mini-bar">
                                    <div class="mini-fill warning" style="--bar-width: 4.1%"></div>
                                </div>
                                <span class="hero-percentage">4,1% do total</span>
                            </div>
                        </div>
                    </div>

                    <div class="infographic-cards">
                        <div class="metric-card success">
                            <div class="metric-header">
                                <span class="metric-title">Conversão em denúncia</span>
                                <span class="metric-chip">74,4%</span>
                            </div>
                            <p class="metric-number">8.153 casos</p>
                            <p class="metric-description">Fluxo majoritário segue para denúncia tradicional, evidenciando efetividade na fase pré-processual.</p>
                        </div>

                        <div class="metric-card info">
                            <div class="metric-header">
                                <span class="metric-title">Requisitórios emitidos</span>
                                <span class="metric-chip">451</span>
                            </div>
                            <p class="metric-number small">4,1% do total</p>
                            <p class="metric-description">Volume direcionado para diligências complementares; monitoramento evita gargalos de resposta.</p>
                        </div>

                        <div class="metric-card warning">
                            <div class="metric-header">
                                <span class="metric-title">Requisitórios</span>
                                <span class="metric-chip">451 emitidos</span>
                            </div>
                            <div class="req-progress">
                                <div class="req-progress-item">
                                    <span>Respondidos</span>
                                    <div class="mini-bar">
                                        <div class="mini-fill success" style="--bar-width: 48%"></div>
                                    </div>
                                    <span class="req-value">217</span>
                                </div>
                                <div class="req-progress-item">
                                    <span>Pendentes</span>
                                    <div class="mini-bar">
                                        <div class="mini-fill pending" style="--bar-width: 52%"></div>
                                    </div>
                                    <span class="req-value">234</span>
                                </div>
                            </div>
                            <p class="metric-description">Mais da metade do volume ainda aguarda retorno, reforçando a necessidade de acompanhamento ativo.</p>
                        </div>
                    </div>
                </div>

                <div class="infographic-note">
                    <strong>Observação:</strong> os dados de requisitórios consideram lançamentos manuais nos sistemas extrajudiciais criminais; rotina automática de envio e recebimento ainda não implantada.
                </div>
            </div>
        `
    },
    {
        id: 3,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Visão Geral dos Dados</h2>
                <div class="content-box">
                    <div class="chart-container">
                        <div class="bar-chart">
                            <div class="bar-item">
                                <div class="bar-label-wrapper">
                                    <span class="bar-label">Inquéritos Movimentados</span>
                                    <span class="bar-value">10.957</span>
                                </div>
                                <div class="bar-track">
                                    <div class="bar-fill" style="width: 100%" data-color="primary">
                                        <span class="bar-percentage">100%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bar-item">
                                <div class="bar-label-wrapper">
                                    <span class="bar-label">Denúncias Oferecidas</span>
                                    <span class="bar-value">8.153</span>
                                </div>
                                <div class="bar-track">
                                    <div class="bar-fill" style="width: 74.4%" data-color="success">
                                        <span class="bar-percentage">74,4%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bar-item">
                                <div class="bar-label-wrapper">
                                    <span class="bar-label">Requisitórios Solicitados</span>
                                    <span class="bar-value">451</span>
                                </div>
                                <div class="bar-track">
                                    <div class="bar-fill" style="width: 4.1%" data-color="warning">
                                        <span class="bar-percentage">4,1%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="chart-legend">
                            <p><strong>Base de cálculo:</strong> Inquéritos Movimentados (10.957)</p>
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
                <h2 class="slide-title">Objetivo do Encontro</h2>
                <div class="content-box">
                    <p class="lead-text">O presente encontro interinstitucional tem por finalidade promover o diálogo qualificado, o alinhamento estratégico e o fortalecimento da cooperação entre membros e servidores do Ministério Público de Pernambuco e Delegados da Polícia Civil de Pernambuco.</p>
                    <div class="objectives-grid">
                        <div class="objective-card">
                            <div class="objective-icon">⚙️</div>
                            <h3>Aprimorar Fluxos</h3>
                            <p>Otimização dos processos de trabalho conjunto</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">🧭</div>
                            <h3>Padronizar Práticas</h3>
                            <p>Uniformização de procedimentos institucionais</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">📊</div>
                            <h3>Compartilhar Diagnósticos</h3>
                            <p>Troca de informações e experiências</p>
                        </div>
                        <div class="objective-card">
                            <div class="objective-icon">🌟</div>
                            <h3>Identificar Melhorias</h3>
                            <p>Oportunidades de aperfeiçoamento contínuo</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
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
        id: 6,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Consolidação de Cultura Institucional</h2>
                <div class="content-box">
                    <div class="culture-pillars">
                        <div class="pillar">
                            <div class="pillar-icon">🤝</div>
                            <h3>Integração</h3>
                            <p>Trabalho conjunto e articulado entre as instituições</p>
                        </div>
                        <div class="pillar">
                            <div class="pillar-icon">🔍</div>
                            <h3>Transparência</h3>
                            <p>Clareza nos processos e comunicação aberta</p>
                        </div>
                        <div class="pillar">
                            <div class="pillar-icon">⚡</div>
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
        id: 7,
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
                                <div class="function-icon">📥</div>
                                <p>Receber comunicações de prisão em flagrante</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">⚖️</div>
                                <p>Representar ao juiz requerendo prisões</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">🧾</div>
                                <p>Formular medidas processuais</p>
                            </div>
                            <div class="function-card">
                                <div class="function-icon">🗂️</div>
                                <p>Requerer peças de informação</p>
                            </div>
                        </div>
                    </div>
                    <div class="cic-highlight">
                        <p><strong>Coração Operacional:</strong> As Centrais de Inquéritos são o centro da atuação pré-processual do MPPE.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Fluxo de Procedimentos na CInq</h2>
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
                                    <li>Integração via PJe, SIM, Consensus, E-mail</li>
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
                                    <li>Verificação de atribuição</li>
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
        id: 9,
        html: `
            <div class="slide-content">
                <h2 class="slide-title">Núcleos - NPP e NANPP</h2>
                <div class="content-box nuclei-grid">
                    <div class="nucleus-card npp-card">
                        <div class="nucleus-header">
                            <span class="nucleus-badge">Núcleo de Persecução Penal (NPP)</span>
                            <p class="nucleus-sub">Foco: denúncia tradicional</p>
                        </div>
                        <ul class="nucleus-list">
                            <li>Requisição de diligências</li>
                            <li>Oferecimento da denúncia</li>
                            <li>Pedido de arquivamento</li>
                        </ul>
                    </div>

                    <div class="nucleus-card nanpp-card">
                        <div class="nucleus-header">
                            <span class="nucleus-badge">Núcleo de Acordo de Não Persecução Penal (NANPP)</span>
                            <p class="nucleus-sub">Foco: função consensual</p>
                        </div>
                        <ul class="nucleus-list">
                            <li>Audiência de ANPP</li>
                            <li>Petição de homologação</li>
                            <li>Acompanhamento do cumprimento</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 10,
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
                        <div class="comm-partners-detailed">
                            <div class="partner-detail">
                                <div class="partner-name">Polícia Civil</div>
                                <ul class="partner-channels">
                                    <li>SEI</li>
                                    <li>SIM</li>
                                    <li>E-MAIL</li>
                                </ul>
                            </div>
                            <div class="partner-detail">
                                <div class="partner-name">TJPE</div>
                                <ul class="partner-channels">
                                    <li>SEI</li>
                                    <li>SIM</li>
                                    <li>E-MAIL</li>
                                    <li>PJe</li>
                                </ul>
                            </div>
                            <div class="partner-detail">
                                <div class="partner-name">SDS</div>
                                <ul class="partner-channels">
                                    <li>SEI</li>
                                    <li>SIM</li>
                                    <li>E-MAIL</li>
                                </ul>
                            </div>
                            <div class="partner-detail">
                                <div class="partner-name">CIAP</div>
                                <ul class="partner-channels">
                                    <li>E-MAIL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="conclusion-box">
                        <h3>Importância do Controle</h3>
                        <p>Essencial para evitar <strong>nulidades</strong>, <strong>ilegalidades</strong> e <strong>prescrição</strong></p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 11,
        html: `
            <div class="slide-content title-slide">
                <div class="title-content">
                    <h1 class="main-title" style="font-size: 3.5rem; margin-bottom: 2rem;">Juntos por uma Justiça Criminal mais Eficiente</h1>
                    <div class="title-decoration"></div>
                    <p class="title-description" style="font-size: 2rem; font-weight: 600;">MPPE | PCPE</p>
                </div>
            </div>
        `
    },
    {
        id: 12,
        html: `
            <div class="slide-content contact-slide">
                <h2 class="slide-title">Contatos - Central de Inquéritos da Capital</h2>
                <div class="content-box contact-box">
                    <div class="contact-text">
                        <span class="contact-chip">Canais de comunicação</span>
                        <p class="lead-text">Escaneie o QR code para acessar a página com telefone e e-mails oficiais da Central de Inquéritos da Capital.</p>
                        <div class="contact-list">
                            <div class="contact-item">
                                <span class="contact-dot"></span>
                                <span>Telefone institucional</span>
                            </div>
                            <div class="contact-item">
                                <span class="contact-dot"></span>
                                <span>E-mails para expedientes e diligências</span>
                            </div>
                            <div class="contact-item">
                                <span class="contact-dot"></span>
                                <span>Orientações gerais</span>
                            </div>
                        </div>
                    </div>
                    <div class="qr-wrapper">
                        <div class="qr-card">
                            <img src="./image/contatos_cinq.svg" alt="QR code de contato da Central de Inqueritos da Capital" class="qr-code">
                            <p class="qr-caption">Aponte a câmera do celular para abrir a página de contatos.</p>
                        </div>
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
