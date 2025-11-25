# Apresentação Interinstitucional MPPE/PCPE

Apresentação web profissional para o **Encontro Interinstitucional** entre o **Ministério Público de Pernambuco (MPPE)** e a **Polícia Civil de Pernambuco (PCPE)**, focada na **Central de Inquéritos da Capital**.

## 🎯 Sobre o Projeto

Esta é uma aplicação web de apresentação de slides desenvolvida com HTML, CSS e JavaScript puro, otimizada para apresentações profissionais com navegação fluida e design moderno.

### Características

- ✨ **Design Profissional**: Interface moderna com as cores institucionais (#850000, #00203F, #E6E6E6, #FFFFFF)
- 🎨 **Animações Suaves**: Transições elegantes entre slides
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⌨️ **Navegação por Teclado**: Setas, espaço, Enter e tecla F para fullscreen
- 🖱️ **Controles Visuais**: Botões de navegação e contador de slides
- 📊 **Barra de Progresso**: Indicador visual do progresso da apresentação
- 🔄 **Navegação Circular**: Loop contínuo entre slides
- 🖼️ **Modo Fullscreen**: Apresentação em tela cheia

## 🚀 Deploy

Este projeto está configurado para deploy na [Vercel](https://vercel.com).

### Deploy Rápido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/seu-repositorio)

### Deploy Manual

1. **Via Interface Web** (Recomendado):
   - Faça push do código para GitHub/GitLab/Bitbucket
   - Acesse [vercel.com](https://vercel.com) e importe o repositório
   - Deploy automático!

2. **Via CLI**:
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

Para instruções detalhadas, consulte [DEPLOY.md](DEPLOY.md).

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js (para servidor local)

### Executar Localmente

```bash
# Instalar e executar servidor local
npm run dev
```

A apresentação estará disponível em `http://localhost:3000`

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento na porta 3000
- `npm start` - Alias para `npm run dev`
- `npm run preview` - Inicia servidor de preview na porta 8080

## 📁 Estrutura do Projeto

```
.
├── index.html           # Página principal
├── styles.css           # Estilos da apresentação
├── script.js            # Lógica de navegação e interação
├── slides-content.js    # Conteúdo dos slides
├── image/               # Logos e imagens
│   ├── logo_MPPE.svg
│   └── logo_PCPE.svg
├── vercel.json          # Configuração Vercel
├── package.json         # Metadados do projeto
└── DEPLOY.md            # Guia detalhado de deploy

```

## 🎮 Controles de Navegação

### Teclado
- `←` / `→` - Navegar entre slides
- `Espaço` / `Enter` - Próximo slide
- `F` - Ativar/desativar fullscreen
- `Esc` - Sair do fullscreen

### Mouse/Touch
- Botões de navegação (setas)
- Botão de fullscreen
- Contador de slides

## 🎨 Paleta de Cores

- **Vermelho**: `#850000` - Cor principal MPPE
- **Azul Marinho**: `#00203F` - Cor principal PCPE
- **Cinza Claro**: `#E6E6E6` - Backgrounds e elementos secundários
- **Branco**: `#FFFFFF` - Texto e contraste

## 📄 Licença

ISC

## 👥 Desenvolvido para

**Central de Inquéritos da Capital**  
Ministério Público de Pernambuco (MPPE)  
Polícia Civil de Pernambuco (PCPE)

---

**Versão**: 1.0.0  
**Última atualização**: Novembro 2025