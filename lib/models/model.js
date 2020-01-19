const mongoose = require("../connection");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: Number,
  rated: String,
  released: Date,
  runtime: String,
  genre: [String],
  director: String,
  writer: [String],
  actors: [String],
  plot: String,
  language: [String],
  country: [String],
  awards: String,
  poster: String,
  metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  type: String,
  dvd: String,
  boxOffice: String,
  production: String,
  website: String,
  response: Boolean
});

const Movie = mongoose.model("Movie", movieSchema);

// exporting our dog schema
module.exports = Movie;
