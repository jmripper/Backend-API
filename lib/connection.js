const mongoose = require("mongoose");

mongoose.Promise = Promise;

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/api_data";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(feedback => console.log("Connected to DB"))
  .catch(error => console.log("error", error));

module.exports = mongoose