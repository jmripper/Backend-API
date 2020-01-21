const express = require('express')
const cors = require("cors")
const app = express()
const routes = require('./lib/routes/routes')
const bodyParser = require('body-parser')

app.use(cors());

app.use(bodyParser.json());

console.log("listening")
app.listen(5000);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.use('/', routes);