const Movie = require('../models/model')

module.exports = {

    index: (req,res) => {
        Movie.find({}).then((movie) => {
            res.json(movie)
        })
    },

    findById: (req, res) => {
        Movie.findById({ _id: req.params._id})
            .then((movie) => {
                res.json(movie)
            })
    },

    findTitle: (req, res) => {
        Movie.find({ title: req.params.title})
            .then((movie) => {
                res.json(movie)
            })
    },

    findRating: (req, res) => {
        Movie.find({rated: req.params.rated})
            .then((movie) => {
                res.json(movie)
            })
    }
}