# Frontend - Financy

Neste projeto front-end sera desenvolvida uma aplicacao React que, em conjunto com a API, permite o gerenciamento de transacoes e categorias.

## Funcionalidades e Regras

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

Regras importantes especificas do front-end:

- [ ] E obrigatoria a criacao de uma aplicacao React usando GraphQL para consultas na API e Vite como bundler
- [ ] Seguir o mais fielmente possivel o layout do Figma

## Paginas

Essa aplicacao possui 6 paginas e dois modais com formularios (Dialog):

- `/`: exibe login quando o usuario esta deslogado e dashboard quando esta logado
- `/auth/register`
- `/dashboard`
- `/transaction`
- `/category`
- `/profile`

## Ferramentas

Obrigatorio no desafio:

- TypeScript
- React
- Vite sem framework
- GraphQL

Flexivel:

- TailwindCSS
- Shadcn
- React Query
- React Hook Form
- Zod

## Variaveis de ambiente

O desafio pede a chave abaixo em `.env.example`:

```env
VITE_BACKEND_URL=
```

Nesta implementacao, o frontend esta configurado para usar:

```env
VITE_GRAPHQL_HTTP_URL=/graphql
```

Crie `frontend/.env` com base em `frontend/.env.example`.

## Pre-requisitos

- Node.js 20+
- pnpm 10+

## Como executar

```bash
cd frontend
pnpm install
pnpm dev
```

Aplicacao disponivel em `http://localhost:5173`.

## Build e preview

```bash
pnpm build
pnpm preview
```

## Dicas

- Comece pelo Style Guide do Figma para padronizar tema, tipografia e componentes.
- Em caso de duvidas, use a comunidade/forum para trocar conhecimento com outros alunos e instrutores.
