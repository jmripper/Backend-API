const express = require('express')
const app = express()
const routes = require('./lib/routes/routes')

app.use('/', routes);

app.listen(5000);