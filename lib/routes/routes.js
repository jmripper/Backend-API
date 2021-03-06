const express = require("express");
const controller = require('../controller/controller')

//create router
const movieRouter = express.Router();

movieRouter.get("/", controller.index);

movieRouter.get("/movie/:id", controller.findById)

movieRouter.get("/:title", controller.findTitle)

movieRouter.get("/:rated", controller.findRating)

movieRouter.post("/create", controller.create)

movieRouter.delete("/delete/:id", controller.delete)

movieRouter.put("/update/:id", controller.update)


module.exports = movieRouter;
