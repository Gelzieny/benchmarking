# Benchmarking de Modelos LLM

Aplicação Nuxt + Bun + Prisma para executar benchmarks de modelos e exibir resultados por métrica.

## Estrutura do projeto

Com base no padrão do repositório `fastapi-template`, o backend foi organizado em camadas:

```bash
server/
├── api/             # Rotas HTTP (entrypoint)
├── controller/      # Regras de orquestração por endpoint
├── repository/      # Acesso a banco (Prisma)
├── dependencies/    # Dependências compartilhadas (ex.: cliente Prisma)
├── models/          # Schemas/contratos de entrada
└── utils/           # Regras auxiliares e motor de avaliação
```

Frontend e recursos:

```bash
app/                 # Páginas e componentes Vue/Nuxt
prisma/              # Schema, migrations e seed
shared/              # Utilitários compartilhados
```

## Setup

```bash
bun install
```

## Desenvolvimento

```bash
bun run dev
```

## Banco de dados e seed

```bash
docker compose up -d
bun run seed
```

## Build

```bash
bun run build
```
