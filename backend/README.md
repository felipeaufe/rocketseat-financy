# Backend - Financy

Neste projeto backend sera desenvolvida uma API GraphQL para gerenciar a organizacao das financas.

## Funcionalidades e Regras

Observacao do desafio: e esperado o uso de SQLite. Caso prefira, pode usar Postgres como opcao.

- [ ] O usuario pode criar uma conta e fazer login
- [ ] O usuario pode ver e gerenciar apenas as transacoes e categorias criadas por ele
- [ ] Deve ser possivel criar uma transacao
- [ ] Deve ser possivel deletar uma transacao
- [ ] Deve ser possivel editar uma transacao
- [ ] Deve ser possivel listar todas as transacoes
- [ ] Deve ser possivel criar uma categoria
- [ ] Deve ser possivel deletar uma categoria
- [ ] Deve ser possivel editar uma categoria
- [ ] Deve ser possivel listar todas as categorias

## Ferramentas

Obrigatorio no desafio:

- TypeScript
- GraphQL
- Prisma
- SQLite

## Variaveis de ambiente

Todo ambiente deve ter `backend/.env` com base em `backend/.env.example`.

Chaves obrigatorias do desafio:

```env
JWT_SECRET=
DATABASE_URL=
```

Chave adicional usada por esta implementacao para CORS:

```env
VITE_API_URL=http://localhost:5173
```

Exemplo completo atual:

```env
VITE_API_URL="http://localhost:5173"
DATABASE_URL="file:./dev.db"
JWT_SECRET="mysecretkey"
```

Caso adicione variaveis adicionais, lembre-se de inclui-las no `.env.example`.

## Pre-requisitos

- Node.js 20+
- pnpm 10+

## Como executar

```bash
cd backend
pnpm install
pnpm prisma
pnpm dev
```

API GraphQL disponivel em `http://localhost:4000/graphql`.

## Dicas

- Nao se esqueca de habilitar/configurar corretamente o CORS.
- Em caso de duvidas, use a comunidade/forum do curso para trocar conhecimento.
