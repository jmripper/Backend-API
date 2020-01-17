const mongoose = require('../connection')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    Title: String,
    Year: Number,
    Rated: String,
    Released: Date,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: Boolean
})

const Movie = mongoose.model('Movie', movieSchema)

// exporting our dog schema
module.exports = Movie
 