# 🌾 Festa da Colheita

Página de convite para colaboração na Festa da Colheita da igreja evangélica.

## 📋 Conteúdo

- **index.html** - Template da página principal (HTML + CSS + JavaScript inline), com placeholders `__PIX_KEY__`/`__WHATSAPP_NUMBER__`
- **scripts/build.mjs** - Gera `dist/index.html` substituindo os placeholders pelas variáveis de ambiente
- **.env.example** - Variáveis de ambiente necessárias (com valores fictícios)
- **vercel.json** - Configuração Vercel (build + output directory)
- **.gitignore** - Arquivos a ignorar no Git
- **.vercelignore** - Arquivos a ignorar no deploy Vercel

## 🚀 Como fazer o deploy

### Pré-requisitos

- Conta GitHub
- Conta Vercel
- Git instalado

### Passo 1: Criar repositório no GitHub

1. Vá para https://github.com/new
2. Nome: `festa-colheita`
3. Inicialize com README
4. Crie o repositório

### Passo 2: Clonar e adicionar arquivos

```bash
git clone https://github.com/SEU_USUARIO/festa-colheita.git
cd festa-colheita

# Remover README padrão se existir
rm README.md

# Adicionar os arquivos
# (copie: index.html, vercel.json, .gitignore, .vercelignore, README.md)

git add .
git commit -m "Inicial: Página Festa da Colheita"
git push origin main
```

### Passo 3: Deploy na Vercel

**Opção A: Via Dashboard Vercel (mais fácil)**

1. Vá para https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione seu repositório `festa-colheita`
4. Clique em "Deploy"

**Opção B: Via CLI**

```bash
vercel login
vercel --prod
```

## 🔧 Configurações da página

- **Data evento:** 15/08 às 19h30
- **Prazo contribuição:** até 13/08
- **Contato presencial:** Procure Clayton ou Isaque no culto

A chave PIX e o número de WhatsApp **não ficam no código-fonte** — são
injetados no build a partir de variáveis de ambiente, para não expor dados
pessoais em um repositório público:

- `PIX_KEY`: a chave PIX exibida na página.
- `WHATSAPP_NUMBER`: número de WhatsApp no formato internacional sem
  símbolos (ex.: `5513900000000`), usado no botão "Falar no WhatsApp".

Configure-as em **Vercel → Project Settings → Environment Variables**. Para
rodar localmente, copie `.env.example` para `.env` com os valores reais,
exporte-os no shell e rode `npm run build` antes de abrir `dist/index.html`.

## 📱 Recursos

- ✅ Countdown em tempo real (dias, horas, minutos, segundos)
- ✅ QR Code PIX dinâmico
- ✅ Botão para copiar chave PIX
- ✅ Compartilhamento via WhatsApp
- ✅ FAQ com respostas frequentes
- ✅ Design responsivo (mobile-first)
- ✅ Tema dark moderno

## 🎨 Design

- Paleta: Verde (#90ee90), Preto (#0f0f0f), Cinza (#2d2d2d)
- Fontes: Lora (títulos), Inter (corpo)
- Tons: Dark moderno, profissional, direto

## 📝 Alterações recentes

- ✅ Substituído "Escaneie para pagar" por "Escaneie para contribuir"
- ✅ Adicionado "ou Isaque" na referência de contato presencial
- ✅ Removido botão de WhatsApp com Clayton (apenas contato presencial)

## 📞 Suporte

Qualquer dúvida, entre em contato com Clayton ou Isaque da igreja.

---

**URL permanente:** https://festa-colheita.vercel.app/
