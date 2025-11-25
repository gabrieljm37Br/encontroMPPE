# 🚀 Guia de Deploy na Vercel

Este documento contém instruções detalhadas para fazer o deploy da apresentação "Encontro Interinstitucional MPPE/PCPE" na Vercel.

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com) (gratuita)
- Git instalado (se for usar repositório)
- Node.js instalado (opcional, apenas para Vercel CLI)

## 🎯 Método 1: Deploy via Interface Web (Recomendado)

### Passo 1: Preparar o Repositório Git

Se ainda não tiver um repositório Git configurado:

```bash
cd "c:\Users\gabriel.jesus\Documents\Encontro MPPE_PCPE\apresenta-o_mp_pc"
git init
git add .
git commit -m "Configuração inicial para Vercel"
```

### Passo 2: Enviar para GitHub/GitLab/Bitbucket

1. Crie um novo repositório no [GitHub](https://github.com/new)
2. Siga as instruções para adicionar o remote e fazer push:

```bash
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git branch -M main
git push -u origin main
```

### Passo 3: Importar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Selecione **"Import Git Repository"**
4. Escolha o repositório que você acabou de criar
5. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (deixe como está)
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
6. Clique em **"Deploy"**

✅ Pronto! Sua apresentação estará online em alguns segundos.

## 🖥️ Método 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

### Passo 3: Deploy

Navegue até o diretório do projeto e execute:

```bash
cd "c:\Users\gabriel.jesus\Documents\Encontro MPPE_PCPE\apresenta-o_mp_pc"
vercel
```

Siga as instruções no terminal:
- **Set up and deploy**: Yes
- **Which scope**: Escolha sua conta
- **Link to existing project**: No
- **Project name**: (pressione Enter para aceitar o padrão ou digite um nome)
- **In which directory is your code located**: `./`

Para fazer deploy em produção:

```bash
vercel --prod
```

## 🌐 Após o Deploy

### Acessar sua Apresentação

Após o deploy, você receberá uma URL como:
```
https://seu-projeto.vercel.app
```

### Configurar Domínio Customizado (Opcional)

1. Acesse o dashboard do projeto na Vercel
2. Vá em **Settings** → **Domains**
3. Adicione seu domínio personalizado
4. Siga as instruções para configurar DNS

### Atualizações Futuras

#### Via Git (Método 1):
Qualquer push para o branch `main` irá automaticamente fazer redeploy:

```bash
git add .
git commit -m "Atualização da apresentação"
git push
```

#### Via CLI (Método 2):
Execute novamente:

```bash
vercel --prod
```

## 🔧 Configurações do Projeto

O projeto já está configurado com:

- ✅ `vercel.json` - Configuração de build e rotas
- ✅ `.vercelignore` - Arquivos excluídos do deploy
- ✅ `package.json` - Metadados do projeto

## 📱 Testando o Deploy

Após o deploy, teste:

1. ✅ Navegação entre slides (setas e botões)
2. ✅ Modo fullscreen (botão F ou tecla F)
3. ✅ Responsividade em mobile
4. ✅ Carregamento de imagens
5. ✅ Contador de slides
6. ✅ Barra de progresso

## 🆘 Solução de Problemas

### Imagens não carregam
- Verifique se as imagens estão no diretório `image/`
- Confirme que os caminhos no código estão corretos

### Estilos não aplicados
- Verifique se `styles.css` está no diretório raiz
- Confirme que o caminho no `index.html` está correto

### JavaScript não funciona
- Verifique se `script.js` e `slides-content.js` estão no diretório raiz
- Abra o console do navegador (F12) para ver erros

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Desenvolvido para**: Central de Inquéritos da Capital - MPPE/PCPE
