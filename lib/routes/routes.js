const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Home Page test");
})

router.get('/dogs', (req,res) => {
    res.send("Were on dogs")
})

module.exports = router;