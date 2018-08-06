const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
// let graphQL handle requests coming to /graphql
app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema
}));
app.listen(5000, () => console.log('App is listening at 5000'));