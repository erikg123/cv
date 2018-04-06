const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(4000);
