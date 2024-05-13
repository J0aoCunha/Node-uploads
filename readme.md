# Backend para Upload e Download de Arquivos na R2 da Cloudflare

Este é um projeto backend desenvolvido em Node.js com TypeScript, focado em facilitar o upload e download de arquivos na R2 da Cloudflare. O projeto utiliza Prisma como ORM para interação com o banco de dados, Zod para validação de dados e Swagger para documentação na rota `/docs`.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu sistema:

- Node.js
- pnpm (Yarn ou npm)
- R2 da Cloudflare (API Key necessária)
- Docker

## Como Usar

Siga estas etapas para configurar e executar o backend em seu ambiente local:

1. Clone este repositório para o seu sistema local usando o seguinte comando:

    ```bash
    git clone https://github.com/J0aoCunha/Ts-Node-uploads
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd Ts-Node-uploads
    ```

3. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```plaintext
    CLOUDFLARE_ENDPOINT=SuaURLAPI
    CLOUDFLARE_ACESS_KEY_ID=SuaR2Key
    CLOUDFLARE_SECRET_ACCESS_KEY=SuaR2KeyPrivada
    DATABASE_URL=URLBANCODEDADOS
    ```

4. Instale as dependências do projeto executando o seguinte comando:

    ```bash
    pnpm install
    # ou
    npm install
    # ou
    yarn install
    ```

5. Execute as migrações do banco de dados com o Prisma:

    ```bash
    npx prisma migrate dev
    ```

6. Inicie o servidor:

    ```bash
    pnpm install
    # ou
    npm install
    # ou
    yarn install
    ```

7. O servidor será iniciado e estará disponível em [http://localhost:3000](http://localhost:3000).

8. Acesse a documentação Swagger em [http://localhost:3000/docs](http://localhost:3000/docs) para explorar e testar as rotas disponíveis.

## Recursos Utilizados

- ![Nodejs](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

- ![Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

- ![Zod](https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white)

- ![Swagger](https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black)

- ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020.svg?style=for-the-badge&logo=Cloudflare&logoColor=white)
