const express = require('express');
const schema = require('./schema/schema');
const app = express();
const { graphqlHTTP, graphiql }  = require('express-graphql');
 const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devuser:1111@cluster0.duiue.mongodb.net/haozi', {useNewUrlParser: true, useUnifiedTopology: true})
.catch( error => handleError(error));

mongoose.connection.once('open', function() {
  console.log('mongoose ok')
});

app.listen(5000, () => console.log('listening on http://localhost:5000/graphql'));

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
  }));
