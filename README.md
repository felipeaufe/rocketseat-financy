# Financy

Projeto full stack para gerenciamento financeiro com API GraphQL (backend) e aplicacao React (frontend).

## Estrutura do projeto

- `backend/`: API GraphQL para autenticacao, usuarios, categorias e transacoes
- `frontend/`: interface React para consumo da API e gerenciamento dos dados

## Funcionalidades e Regras (Desafio)

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

## Tecnologias obrigatorias do desafio

- Backend: TypeScript, GraphQL, Prisma e SQLite
- Frontend: TypeScript, React, Vite (sem framework) e GraphQL

## Paginas previstas no frontend

- `/`: exibe login quando deslogado e dashboard quando logado
- `/auth/register`
- `/dashboard`
- `/transaction`
- `/category`
- `/profile`

## Como executar

1. Configure os arquivos `.env` em `backend` e `frontend` com base nos `.env.example`.
2. Instale dependencias em cada app:

```bash
cd backend
pnpm install

cd ../frontend
pnpm install
```

3. Em terminais separados, suba backend e frontend:

```bash
# backend
cd backend
pnpm dev

# frontend
cd frontend
pnpm dev
```

4. Acesse `http://localhost:5173`.

## Referencias

- README do backend: `backend/README.md`
- README do frontend: `frontend/README.md`
- Desafio oficial: https://efficient-sloth-d85.notion.site/Desafio-Fase-3-Financy-2ca395da5770806ba9c5fba5cc3f681a
