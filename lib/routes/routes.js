const express = require("express");
const controller = require('../controller/controller')

//create router
const movieRouter = express.Router();

movieRouter.get("/", controller.index);

movieRouter.get("/:_id", controller.findById)

movieRouter.get("/:title", controller.findTitle)

movieRouter.get("/:rated", controller.findRating)



module.exports = movieRouter;
