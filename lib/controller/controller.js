const Movie = require("../models/model");

module.exports = {
  //Get all movies
  index: async (req, res) => {
    Movie.find({})
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.log("Unexpected error: " + err);
      });
  },
  //Get movies by title
  findTitle: async (req, res) => {
    // console.log(req.params.title);
    Movie.find({ title: req.params.title })
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.log("Unexpected error: " + err);
      });
  },
  //Get movies by rating
  findRating: async (req, res) => {
    Movie.find({ rated: req.params.rated })
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.log("Unexpected error: " + err);
      });
  },

  create: async (req, res, next) => {
    Movie.create({
      title: req.body.title,
      year: req.body.year,
      rated: req.body.rated,
      released: req.body.released,
      runtime: req.body.runtime,
      genre: req.body.genre,
      director: req.body.director,
      writer: req.body.writer,
      actors: req.body.actors,
      plot: req.body.plot,
      language: req.body.language,
      country: req.body.country,
      awards: req.body.awards,
      poster: req.body.poster,
      metascore: req.body.metascore,
      imdbRating: req.body.imdbRating,
      imdbVotes: req.body.imdbRating,
      imdbID: req.body.imdbID,
      type: req.body.type,
      dvd: req.body.dvd,
      boxOffice: req.body.boxOffice,
      production: req.body.production,
      website: req.body.website,
      response: req.body.response
    })
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.log("Unexpected error: " + err);
      });
  },

  update: async (req, res, next) => {
      Movie.findOneAndUpdate({
        _id: req.params.id} ,
        {year: req.body.year
        }).then(movie => {
          res.json(movie)
      }).catch(err => {
        console.log("Unexpected error: " + err);
      });
  },

  delete: async (req, res, next) => {
    Movie.deleteOne({
      _id: req.body.id
    })
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.log("Unexpected error: " + err);
      });
  }
};
