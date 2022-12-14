# ng-cash Frontend

Este projeto pretende seguir as seguintes demandas: Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários da NG consigam realizar transferências internas entre si.

Neste repositório está a parte do cliente. As requisições estão sendo disparadas para o localhost, então é extremamente imporante seguir o passo a passo, para evitar conflitos de portas e a aplicação rodar 100%.

## Como rodar a aplicação

### Ambiente e Ferramentas:

- Yarn: https://yarnpkg.com/
- NPM: https://www.npmjs.com/

### Passo a passo:

1. Como explicado acima, esta aplicação depende de uma api, portanto a primeira parte deste passo a passo é seguir o readme deste repositório https://github.com/hiquebarros/ng-cash-backend. Lá estarão as orientações para subir o container da api. A api deve ser levantada antes de startar o front pois as requisições do cliente estão sendo feitas para o localhost:3000, que é a porta configurada para o backend. Nesse sentido, se o front for startado na porta 3000 a aplicação não vai funcionar.
2. Após rodar a api, clone a aplicação do frontend no seu terminal com o seguinte comando: `git clone git@github.com:hiquebarros/ng-cash-frontend.git`
3. Baixe as dependêncas do projeto utilizando o gerenciador de pacotes que preferir.
   Por exemplo:
   `yarn install`
   ou
   `npm install`
4. Agora, com as dependencias já instaladas basta um `yarn start` para rodar o front localmente.
