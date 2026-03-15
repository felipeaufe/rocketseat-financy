# Frontend - Execucao

## Pre-requisitos

- Node.js 20+
- pnpm 10+

## Configurar variaveis de ambiente

Crie o arquivo `frontend/.env` com base em `frontend/.env.example`:

```env
VITE_GRAPHQL_HTTP_URL=/graphql
```

## Instalar dependencias

```bash
cd frontend
pnpm install
```

## Executar em desenvolvimento

```bash
pnpm dev
```

Aplicacao disponivel em `http://localhost:5173`.

## Build e preview

```bash
pnpm build
pnpm preview
```
