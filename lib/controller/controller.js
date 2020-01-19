const Movie = require("../models/model");

module.exports = {
//Get all movies
  index: async (req, res) => {
    Movie.find({}).then(movie => {
      res.json(movie);
    }).catch(err => {
        console.log("Unexpected error: " + err);
    });
  },

//Get movies by title
  findTitle: async (req, res) => {
      console.log(req.params.title)
    Movie.find({ title: req.params.title }).then(movie => {
      res.json(movie);
    }).catch(err => {
        console.log("Unexpected error: " + err);
    });
  },

  findRating: async (req, res) => {
    Movie.find({ rated: req.params.rated }).then(movie => {
      res.json(movie);
    }).catch(err => {
        console.log("Unexpected error: " + err);
    });
  },

  create : async (req,res,next) => {
      Movie.create({
          title: req.body.title
      }).then(movie => {
          res.json(movie)
      }).catch(err => {
        console.log("Unexpected error: " + err);
    });
  },

  update: async (req, res, next) => {},

  delete: async (req, res, next) => {
    Movie.deleteOne({
      _id: req.body.id
    }).then(movie => {
      res.json(movie);
    }).catch(err => {
        console.log("Unexpected error: " + err);
    });
  }
};
