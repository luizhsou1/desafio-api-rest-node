<h1 align="center"> Desafio API REST em Node </h1>

<p align="justify"><a href="./DESAFIO-PROPOSTO.md">clique aqui</a> para visualizar o desafio...</p>

## 👨‍💻 Desenvolvedor

- Luiz <luizhsou1@gmail.com>

## ✋ Pré-requisitos

- Node.js e NPM instalado

## 🚀 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## 🔥 Instalação e execução 

1. Faça um clone desse repositório;
2. Entre na pasta `cd desafio-btg-pactual`;
3. Rode `npm i` para instalar as dependências;
4. Rode `npm start` para executar o projeto;

## 📜 Scripts

Rode `npm run <script name>`:

- `start`: Executa a aplicação
- `dev`: Roda a aplicação em desenvolvimento, já libera a porta 9222 para debug
- `build`: Compila arquivos Typescript e joga na pasta `dist`
- `build:watch`: Executa compilação em tempo real, ideal para usar em conjunto `npm run dev` rodando em outro aba do terminal, 
- `test`: Roda todos os testes
- `test:verbose`: Roda todos os testes de forma detalhada
- `test:unit`: Roda apenas os testes unitários (No futuro terá `test:integration` e esse comando fará mais sentido)
- `test:cov`: Roda cobertura de testes da aplicação, irá criar um html dentro de `coverage/lcov-report` caso queira visualizar no browser
- `test:clear`: Limpa cache de testes (ideal para grandes refatorações)

## ⚠️ Observações

1. Arquivos no formato **.txt** de cada usuário se encontram na pasta `files/texts`
2. [Documentação da api](http://localhost:3000/docs) (Caso esteja rodando na porta **3000**)
3. Caso deseje debugar **utilizando o VS Code**, já acompanha um arquivo de configuração para dar um attach no processo em execução, basta antes ter rodado `npm run dev`.
4. Cobertura de testes está apenas na **camada de domínio** e **repositories** do módulo de **users**, porém com o tempo outras camadas também devem ser cobertas por testes.
5. Caso deseje alterar alguma variável de ambiente, renomeie o arquivo `.env.example` para `.env`, alterando seus valores de acordo com o que deseja.

