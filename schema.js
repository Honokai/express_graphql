const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Usuarios {
        id: Int!
        nome: String!
        login: String!
    }

    type Beer {
        id: Int!
        name: String!
        brand: String
        price: Float
    }

    type Query {
        current: Usuarios
        beer(id: Int!): Beer
        beers(brand: String!): [Beer]
    }

    type Mutation {
        register(nome: String!, login: String!, senha: String!): String
        login(login: String!, senha: String!): String
    }
`

module.exports = typeDefs