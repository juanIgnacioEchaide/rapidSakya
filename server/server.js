const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
app.listen(4000, () => console.log('listening'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
