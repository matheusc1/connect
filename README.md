# Connect 🔗

O **Connect** é uma aplicação web que permite a criação e gestão de links de indicação, rastreando cliques e gerando um ranking de usuários mais influentes. Desenvolvido com **Next.js**, **React** e tecnologias modernas para garantir alto desempenho e usabilidade.

## Funcionalidades ✨

- **Cadastro de usuários**: Cada usuário recebe um link exclusivo de indicação.  
- **Sistema de indicação**: Novos usuários podem se inscrever através do link de outra pessoa.  
- **Ranking de indicações**: Exibe os usuários com mais indicações bem-sucedidas.

## Tecnologias utilizadas 💻

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Orval](https://orval.dev/)
- [Biome](https://biomejs.dev/)

## Instalação 🛠️

### Pré-requisitos

- **Node.js** instalado (versão recomendada: LTS).
- **Docker** instalado (opcional, mas recomendado).
- **Git**.

### Passo a passo

1. Clone o repositório e instale as dependências

```sh
git clone https://github.com/matheusc1/connect
cd connect
npm install
```

2. Clone o repositório back-end e instale suas dependências

```sh
git clone https://github.com/rocketseat-education/nlw-connect-node
npm install
```
3. Suba os containers no Docker (Banco de dados Postgres e Redis).

```sh
docker compose up -d
```

4. Execute as migrations do banco de dados

```sh
npm run db:migrate
```

5. Inicie o servidor back-end

```sh
npm run dev
```

6. Inicie o front-end

```sh
npm run dev
```

### 🚀 Configuração sem Docker
Caso prefira não utilizar Docker, siga estas etapas:

1. **Crie um banco de dados Postgres e um Redis**

   - Registre-se gratuitamente no [Neon.tech](https://neon.tech/) (PostgreSQL) e [Upstash](https://upstash.com/) (Redis).  
   - Configure os serviços e copie as URLs de conexão.  

2. **Configure as variáveis de ambiente**

   - Substitua as variáveis no arquivo `.env` com as URLs obtidas no Neon e Upstash.  

## Créditos 💡

Aplicação desenvolvida durante o evento **NLW** da [@Rocketseat](https://github.com/Rocketseat)
