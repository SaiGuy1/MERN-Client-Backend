const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema ({
  country: {
    type:String,
  },
  city: {
    type:String,
  }
})


const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;