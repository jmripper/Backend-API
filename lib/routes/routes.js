const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
   
});

router.get("/country", async (req, res) => {
  res.send("Were on dogs");
});

router.post("/", async (req, res) => {
    console.log(req.body)
  });

module.exports = router;
