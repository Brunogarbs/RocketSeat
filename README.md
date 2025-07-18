# Rocketseat Event Project - Audio Transcription & AI Integration

Projeto desenvolvido durante um evento da Rocketseat, com foco em tecnologias modernas de desenvolvimento full-stack e integração de Inteligência Artificial. A aplicação permite a gravação e transcrição de áudios diretamente pelo navegador, além de gerar respostas inteligentes com base no conteúdo transcrito.

## ✨ Funcionalidades

- 🎙️ Gravação de áudio via navegador;
- 🔊 Transcrição automática do áudio;
- 🧠 Geração de embeddings e respostas inteligentes usando a API do Gemini;
- 🔍 Consulta de dados transcritos via interface interativa;
- 🌐 Upload de arquivos e consumo de APIs com React Query;
- ⚙️ Integração entre front-end e back-end com estrutura desacoplada e performática;

## 🚀 Tecnologias Utilizadas

### Back-End:

- Node.js
- Fastify
- TypeScript
- PostgreSQL
- Drizzle ORM
- Docker

### Front-End:

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Hooks personalizados para controle de gravação, requisições e estados.

### Inteligência Artificial:

- Gemini API (Google AI)
- Speech-to-Text

## 📁 Estrutura de Pastas

```
├── public/
│   └── assets/           # Arquivos estáticos e mídias
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   ├── pages/            # Páginas principais da aplicação
│   ├── services/         # Integração com APIs externas (IA, transcrição)
│   ├── utils/            # Funções auxiliares
│   └── App.tsx           # Componente principal
├── server/
│   ├── controllers/      # Lógica de negócio do backend
│   ├── routes/           # Rotas da API
│   └── index.ts          # Inicialização do servidor
├── README.md
└── package.json
```

## 📚 Como executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as chaves de API necessárias.
4. Execute o projeto com `npm run dev`.

---

Este projeto foi criado com fins educacionais e de experimentação com IA.
Sinta-se livre para contribuir, testar melhorias ou aplicar este modelo em outros contextos.