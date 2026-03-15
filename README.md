# Financy

Aplicacao de gerenciamento financeiro dividida em duas partes:

- `backend`: API GraphQL para autenticacao, categorias e transacoes
- `frontend`: interface React para consumo da API

## Funcionalidades e Regras

Assim como na API, temos as seguintes funcionalidades e regras:

- [x] O usuario pode criar uma conta e fazer login
- [x] O usuario pode ver e gerenciar apenas as transacoes e categorias criadas por ele
- [x] Deve ser possivel criar uma transacao
- [x] Deve ser possivel deletar uma transacao
- [x] Deve ser possivel editar uma transacao
- [x] Deve ser possivel listar todas as transacoes
- [x] Deve ser possivel criar uma categoria
- [x] Deve ser possivel deletar uma categoria
- [x] Deve ser possivel editar uma categoria
- [x] Deve ser possivel listar todas as categorias

Regras importantes do front-end:

- [x] Aplicacao React usando GraphQL para consultas na API e Vite como bundler
- [x] Interface implementada conforme o desafio proposto

## Paginas

A aplicacao possui as seguintes paginas:

- `/`:
  - Tela de login quando o usuario esta deslogado
  - Dashboard quando o usuario esta logado
- `/auth/register`: cadastro
- `/dashboard`: visao geral
- `/transaction`: gestao de transacoes
- `/category`: gestao de categorias
- `/profile`: perfil do usuario

## Ferramentas

Obrigatorias e utilizadas no projeto:

- TypeScript
- React
- Vite
- GraphQL

Bibliotecas adotadas:

- Apollo Client
- Tailwind CSS
- shadcn/ui
- Zustand

## Estrutura

```text
backend/
frontend/
```

## Scripts

### Frontend

- `pnpm dev`: inicia servidor de desenvolvimento
- `pnpm build`: gera build de producao
- `pnpm preview`: serve o build localmente
- `pnpm format`: formata arquivos em `src`

### Backend

- `pnpm dev`: inicia API em modo watch
- `pnpm prisma`: gera cliente Prisma
- `pnpm format`: formata arquivos em `src`

## Fluxo de uso

1. Acesse `http://localhost:5173`
2. Crie uma conta ou faca login
3. Cadastre categorias
4. Cadastre, edite, liste e exclua transacoes
5. Gerencie apenas seus proprios dados

## Dicas

- Inicie o backend antes do frontend para evitar erro de conexao GraphQL.
- Se houver erro de autenticacao, faca logout e login novamente para renovar o token.
