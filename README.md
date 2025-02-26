# Connect 🔗

Aplicação web desenvolvida utilizando **Next.js** para contagem de indicações por links e clicks.

## Funcionalidades ✨

- Cadastro de usuário para pegar um link de indicação
- Sistema de indicação onde é possível se inscrever pelo link de outra pessoa
- Ranking de indicações

## Tecnologias utilizadas 💻

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Orval](https://orval.dev/)
- [Biome](https://biomejs.dev/)

## Instalação

### Pré-requisitos

- Node.js instalado (versão recomendada: LTS).
- É recomendado ter o Docker instalado.
- Git.

### Passo a passo

1. Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/matheusc1/connect
cd connect
```
2. Instale as dependências e inicie a aplicação:

```bash
npm install
npm run dev
```

3. Clone o repositório back-end e instale suas dependências:

```bash
git clone https://github.com/rocketseat-education/nlw-connect-node
npm install
```
4. Suba os containers no Docker.

```bash
docker compose up -d
```

5. Crie as bases de dados

```bash
npm run db:migrate
```

6. Execute a API:

```bash
npm run dev
```

- Caso não utilize o Docker, crie uma conta gratuita nos sites: [neon.tech](https://neon.tech/) e [Upstash](https://upstash.com/)
- Após isso configure um banco de dados Postgres no neon e um Redis no Upstash.
- Troque a URL no arquivo `.env` para as URLs dos serviços utilizados.

## Créditos 💡

Aplicação desenvolvida durante o evento **NLW** da [@Rocketseat](https://github.com/Rocketseat)
