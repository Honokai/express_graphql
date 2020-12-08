const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Usuarios {
        id: Int!
        nome: String!
        login: String!
    }

    type Alunos {
        id: Int!
        matricula: String
        av1: Float
        av2: Float
        av3: Float
        id_usuario: Int!
    }

    type Beer {
        id: Int!
        name: String!
        brand: String
        price: Float
    }

    type Query {
        current: Usuarios
        findAllUsers: [Usuarios]
        beer(id: Int!): Beer
        beers(brand: String!): [Beer]
    }

    type Mutation {
        register(nome: String!, login: String!, senha: String!): String
        login(login: String!, senha: String!): String
        alunoCreate(matricula: String!, av1: Float!, av2: Float!, av3: Float!, id_usuario: Int!): Alunos
    }
`

module.exports = typeDefs