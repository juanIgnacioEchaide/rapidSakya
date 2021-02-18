const express = require('express');
const schema = require('./schema/schema');

const app = express();

const { graphqlHTTP, graphiql }  = require('express-graphql');

app.listen(5000, () => console.log('listening on http://localhost:5000/graphql'));

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
  }));
