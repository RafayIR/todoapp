const cors = require('cors');
const routes = require('./routes/routes');

// Create Server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const jwt = require('jsonwebtoken');

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);


// Redis





app.listen(8080);
