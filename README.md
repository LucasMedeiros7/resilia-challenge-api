# API Resilia challenge

## [Frontend do projeto](https://github.com/LucasMedeiros7/resilia-challenge-web)

<br/>

## ⚡ Requisitos para rodar aplicação localmente

- [Git](https://git-scm.com/) instalado
- [Docker](https://www.docker.com/) instalado
- [Node](https://node.js.org/) instalado
- [Npm](https://www.npmjs.com/) instalado

<br/>

## 🎡 Como rodar o projeto

```bash
# Faça o clone do projeto
$ git clone git@github.com:LucasMedeiros7/resilia-challenge-api.git

# Entre na pasta do projeto
$ cd resilia-challenge-api

# Instale as dependências
$ npm install

# Suba o banco de dados da aplicação utilizando o docker-compose
$ docker-compose up -d

# Altere o nome do arquivo ".env.example" para ".env" apenas

# Rode as migrations para criar criar e popular as tabelas no banco de dados
$ npm run migrate

# Inicie o servidor
$ npm run dev

# Aplicação vai estar rodando em http://localhost:3333
```

<br/>

## 🛣️ Rotas da API:

🏫 Rota para listar todos os polos.

#### GET `/polos`

<br/>

🧑‍🎓 Rota para cadastrar um aluno.

#### POST `/students`

#### Conteúdo que deve ser passado no corpo da requisição

```json
{
  "name": "Roberto Dinamite",
  "email": "robertodagama@gmail.com",
  "polo_id": 1
}
```

<br/>

### 🧑‍🎓 Rota para listar alunos de um polo específico.

#### GET `/students/:{polo_id}`

<br/>

### 🧑‍🎓 Rota para transferir um aluno para outro polo.

#### PATCH `/students/:{enrollment}`

#### Conteúdo que deve ser passado no corpo da requisição

```json
{
  "polo_id": 5
}
```

<br/>

### 🧑‍🎓 Rota para remover um aluno.

#### DELETE `/students/:{enrollment}`
