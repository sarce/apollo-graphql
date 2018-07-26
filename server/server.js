const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphql = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(cors()); // enable `cors`
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use('/graphql', graphql({
	schema: schema,
	graphiql: true
}));

app.listen(4000);
