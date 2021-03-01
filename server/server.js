const express = require('express');
const { pass, user} = require('../utils/secured_constants');
const schema = require('./schema/schema');
var cors = require('cors')
const app = express();
const { graphqlHTTP, graphiql }  = require('express-graphql');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://'+user+':'+pass+'@cluster0.duiue.mongodb.net/haozi', {useNewUrlParser: true, useUnifiedTopology: true})
.catch( error => new Error('the following error happened', error));

mongoose.connection.once('open', function() {
  console.log('mongoose ok')
});


app.use(cors());

app.listen(5000, () => console.log('listening on http://localhost:5000/graphql'));

app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
  }));
