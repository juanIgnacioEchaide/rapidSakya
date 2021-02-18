const express = require('express');

const app = express();

const {graphqlHTTP}  = require('express-graphql');


app.listen(4000, () => console.log('listening on http://localhost:4000'));

app.use('/graphql', graphqlHTTP({
/*     schema: schema,
    rootValue: root,
    graphiql: true, */
  }));
