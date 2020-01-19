const express = require("express");
const router = express.Router();
const controller = require('../controller/controller')

router.get("/", controller.index);

router.post("/", async (req, res) => {
    console.log(req.body)
  });

module.exports = router;
