const mongoose = require("mongoose");

mongoose.Promise = Promise;

// let mongoURI = "";

// if (process.env.NODE_ENV === "production") {
//   mongoURI = process.env.DB_URL;
// } else {
//   mongoURI = "mongodb://localhost/whatever";
// }

console.log("listening")

mongoose
  .connect("mongodb://localhost/whatever", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch(error => console.log("error", error));

module.exports = mongoose;
