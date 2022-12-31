const cors = require('cors');
const routes = require('./routes/routes');

// Create Server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',routes);



app.listen(8080);
