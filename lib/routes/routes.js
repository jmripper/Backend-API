const express = require("express");
const router = express.Router();
const Dog = require("../models/dogs");

router.get("/", (req, res) => {
    await Dog.find();
});

router.get("/dogs", async (req, res) => {
  res.send("Were on dogs");
});

router.post("/", async (req, res) => {
  const dog = new Dog({
    organization_id: String,
    url: String,
    type: String,
    species: String,
    breeds: {
      primary: String,
      secondary: String,
      mixed: Boolean,
      unknown: Boolean
    },
    colors: {
      primary: String,
      secondary: String,
      tertiary: String
    },
    age: String,
    gender: String,
    size: String,
    coat: String,
    attributes: {
      spayed_neutered: Boolean,
      house_trained: Boolean,
      declawed: Boolean,
      special_needs: Boolean,
      shots_current: Boolean
    },
    environment: {
      children: String,
      dogs: String,
      cats: String
    },
    name: String,
    description: String,
    photos: {
      small: String,
      medium: String,
      large: String,
      full: String
    },
    status: String,
    status_changed_at: Date,
    published_at: Date,
    distance: String,
    contact: {
      email: String,
      phone: String,
      address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        postcode: Number,
        country: String
      }
    }
  });
  dog.save()
  .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json({err})
  })
});

module.exports = router;
