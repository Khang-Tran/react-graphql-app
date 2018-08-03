const {gql} = require('apollo-server-express');
exports.typeDefs = gql`
    type Recipes {
        name: String!
        category: String!
        description: String!
        instruction: String!
        createdDate: String
        like: Int
        username: String
    }
    
    type Users {
        username: String! @unique
        password: String!
        email: String!
        joinDate: String
        favorites: [Recipes]
    }
    type Query {
        getAllRecipes: [Recipes]
    }
`;