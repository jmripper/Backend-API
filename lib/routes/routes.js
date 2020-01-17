const express = require("express");
const router = express.Router();
const Dog = require('../models/dogs')

router.get('/', (req,res) => {
    res.send("Home Page test");
})

router.get('/dogs', (req,res) => {
    res.send("Were on dogs")
})

router.post('/', (req,res) => {
    
})

module.exports = router;