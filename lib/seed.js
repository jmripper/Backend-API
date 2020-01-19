const seedData = require('./data.json')

const Movie = require('./models/model')

Movie.deleteMany({}).then(() => {
    Movie.create(seedData).then((movie) => {
            console.log(movie)
            process.exit();
        })
        .catch((err) => {
            console.log("fail.....", err)
        })
})
