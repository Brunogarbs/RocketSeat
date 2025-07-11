# Rocketseat Event Project - Audio Transcription & AI Integration

Este projeto foi desenvolvido como parte de um evento promovido pela **Rocketseat**, focando em integração de Inteligência Artificial para transcrição de áudio e respostas automáticas a perguntas relacionadas ao tema da gravação.

## ✨ Funcionalidades

- Transcrição automática de áudios.
- Geração de respostas inteligentes para perguntas sobre o conteúdo transcrito.
- Interface intuitiva para upload e análise de áudios.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Backend da aplicação.
- **React**: Interface web.
- **OpenAI API**: Processamento de linguagem natural e geração de respostas.
- **Speech-to-Text API**: Transcrição de áudio.
- **TypeScript**: Tipagem estática para maior segurança.
- **Express**: Estrutura do servidor backend.

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

Projeto criado para fins educacionais e experimentação com IA e transcrição de áudio.