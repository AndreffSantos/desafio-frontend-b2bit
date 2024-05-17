# Desafio Frontend B2Bit

Agradeço a oportunidade de participar do processo seletivo da B2Bit e espero que este projeto atenda às expectativas.

## Sumário
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instruções para Rodar a Aplicação](#instruções-para-rodar-a-aplicação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contato](#contato)

## Descrição
Este projeto foi desenvolvido para participar do processo seletivo de Desenvolvedor Front-end em na B2Bit. A aplicação implementa as funcionalidades descritas nos [Requisitos](https://doc.clickup.com/3020915/p/h/2w63k-48543/4fbf8b7f844323d) utilizando ReactJS e TypeScript.

Este projeto é uma aplicação ReactJS que permite aos usuários se autenticar e visualizar seu perfil. A aplicação interage com uma API para realizar o login e obter informações do perfil do usuário.

## Tecnologias Utilizadas

- ReactJS
- TypeScript
- React Router (para navegação)
- Formik (para gerenciamento de formulários)
- Axios (para requisições HTTP)

## Funcionalidades

1. **Sign In Page**
    - Permite ao usuário inserir suas credenciais e fazer login.
    - Validação do formulário de login.
    - Exibe mensagem de erro em caso de falha no login.

2. **Manter o Usuário Logado**
    - Persistência do token de autenticação no LocalStorage para manter o usuário logado.

3. **Feedback de Credenciais Incorretas**
    - Exibe uma mensagem de erro quando as credenciais fornecidas estão incorretas.

4. **Home Page com Perfil do Usuário**
    - Exibe as informações do perfil do usuário autenticado utilizando o token de acesso.

5. **Logout**
    - Permite ao usuário sair da aplicação, removendo o token de autenticação do LocalStorage e redirecionando para a página de login.

## Instruções para Rodar a Aplicação

### Pré-requisitos

- Node.js instalado
- NPM

### Rodando a aplicação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AndreffSantos/desafio-frontend-b2bit.git
   cd desafio-frontend-b2bit
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie a aplicação:**
   ```bash
   npm start
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e navegue para `http://localhost:3000`

### Scripts Disponíveis

- `start`: Inicia a aplicação em modo de desenvolvimento.
- `build`: Compila a aplicação para produção.

## Estrutura de Pastas

```
desafio-frontend-b2bit/
│
├── public/
├── src/
│   ├── assets/             # Imagens e outros ativos estáticos
│   ├── components/         # Componentes reutilizáveis
│   ├── interfaces/         # Arquivos para validação de tipos
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Configurações de Axios e chamadas à API
│   ├── styles/             # Arquivos de estilização
│   ├── App.tsx             # Componente principal da aplicação configuração de rotas
│   ├── index.tsx           # Ponto de entrada da aplicação
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── package.json
└── README.md
```

## Contato

Caso tenha alguma dúvida ou sugestão, entre em contato:

- **Nome:** André Santos
- **Email:** andrefelipe_santos@outlook.com
- **LinkedIn:** [linkedin](https://www.linkedin.com/in/andrefelipe-santos/)

---