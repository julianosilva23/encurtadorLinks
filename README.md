# [Encurtador de URLs](https://encurtador-urls-teste.herokuapp.com) 

![Coverage](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badget.svg)

![Coverage lines](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badge-lines.svg)
![Coverage functions](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badge-functions.svg)
![Coverage branches](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badge-branches.svg)
![Coverage statements](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badge-statements.svg)

## Começando

Para executar o projeto, será necessário instalar:
- [Node 12.x.x Interpretador Javascript](https://nodejs.org/en/download/)
- [Yarn 1.x.x Gerenciador de Pacotes](https://classic.yarnpkg.com/pt-BR/docs/install/)
- [Docker 2.3.x Ambientes isolados via container](https://www.docker.com/get-started)


## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub:

```shell
git clone https://github.com/julianosilva23/encurtadorLinks/
yarn install
docker run --name database -d -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=my_db -p 5432:5432 postgres
```

- Crie um arquivo .env com base no .env.example
- Preencha a variável de ambiente DB_PASS [mysecretpassword] e DB_NAME [my_db] com a variável inserida na execução do container docker

Execute o migrate no banco de dados
```shell
yarn sequelize db:migrate
```

## Testes

Para executar os testes, utilize o comando abaixo:

```
yarn test
```

## Deploy
Para publicar a API, utilize o comando abaixo:

```
yarn sequelize db:migrate && yarn build && yarn start
```

## Exemplo

Você pode acessar os links do projeto por aqui: 
- [Link da Api](https://encurtador-urls-teste.herokuapp.com)
- [Documentação](https://encurtador-urls-teste.herokuapp.com/api-docs/)
