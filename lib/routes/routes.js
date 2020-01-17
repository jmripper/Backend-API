const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.send("Home Page test");
})

module.exports = router;