const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variable.env'});


const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./schema');
const {resolvers} = require('./resolvers');


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));