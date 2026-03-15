# Backend - Execucao

## Pre-requisitos

- Node.js 20+
- pnpm 10+

## Configurar variaveis de ambiente

Crie o arquivo `backend/.env` com base em `backend/.env.example`:

```env
VITE_API_URL="http://localhost:5173"
DATABASE_URL="file:./dev.db"
JWT_SECRET="mysecretkey"
```

## Instalar dependencias

```bash
cd backend
pnpm install
```

## Gerar cliente Prisma

```bash
pnpm prisma
```

## Executar em desenvolvimento

```bash
pnpm dev
```

API GraphQL disponivel em `http://localhost:4000/graphql`.
