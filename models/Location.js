const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema ({
  country: {
    type:String,
  },
  city: {
    type:String,
  },
  cityId: {
    type: Number,
  },
  img: {
    type: String
  }
})


const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;