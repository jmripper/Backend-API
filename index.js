const express = require('express')
//const cors = require("cors")
const app = express()
const routes = require('./lib/routes/routes')
const bodyParser = require('body-parser')

//app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

console.log("listening")
app.listen(5000);