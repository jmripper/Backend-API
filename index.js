const express = require('express')
const app = express()
const routes = require('./lib/routes/routes')
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

console.log("listening")
app.listen(5000);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.use('/', routes);