const mongoose = require("../connection");

const Schema = mongoose.Schema;

const DogSchema = new Schema({
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

const Dog = mongoose.model('Dog', DogSchema)

// exporting our dog schema
module.exports = Dog
