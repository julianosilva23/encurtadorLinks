# [Encurtador de URLs] (https://encurtador-urls-teste.herokuapp.com) &middot; [![Coverage functions](https://github.com/julianosilva23/encurtadorLinks/blob/master/__tests__/badges/badge-functions.svg)]

## Começando

Para executar o projeto, será necessário instalar:
- [Node 12.x.x Interpretador Javascript] (https://nodejs.org/en/download/)
- [Yarn 1.x.x Gerenciador de Pacotes] (https://classic.yarnpkg.com/pt-BR/docs/install/)
- [Docker 2.3.x Ambientes isolados via container] (https://www.docker.com/get-started)


## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/julianosilva23/encurtadorLinks/
yarn install
docker run --name database -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Crie um arquivo .env com base no .env.example e substitua as variáveis de ambiente
 - adicione a senha informada na execução do container

Execute o migrate no banco de dados
```shell
yarn sequelize db:migrate
```

## Testes

Para executar os testes, utilize o comando abaixo:

```
yarn test
```

## Exemplo

Você pode acessar o projeto por aqui: [Link da Api](https://encurtador-urls-teste.herokuapp.com/encurtador)

- [Documentação](https://encurtador-urls-teste.herokuapp.com/api-docs/)

```
yarn test
```