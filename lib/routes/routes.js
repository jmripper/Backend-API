const express = require("express");
const controller = require('../controller/controller')

//create router
const movieRouter = express.Router();

movieRouter.get("/", controller.index);

movieRouter.get("/:title", controller.findTitle)

movieRouter.get("/:rated", controller.findRating)

movieRouter.post("/new_movie", controller.create)

movieRouter.delete("/remove", controller.delete)

movieRouter.post("/", controller.update)


module.exports = movieRouter;
