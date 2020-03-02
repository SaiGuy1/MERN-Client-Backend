const db = require('./models');

const location_list = [
  {
    country: "United States",
    city: "San Francisco"
  },
  {
    country: "United States",
    city: "Seattle"
  },
  {
    country: "United States",
    city: "New York"
  },
  {
    country: "France",
    city: "Paris"
  },
  {
    country: "Canada",
    city: "Vancouver"
  },
  {
    country: "Germany",
    city: "Berlin"
  },
  {
    country: "The Netherland",
    city: "Amsterdam"
  },
  {
    country: "England",
    city: "London"
  },
  {
    country: "Australia",
    city: "Sydney"
  },
  {
    country: "Spain",
    city: "Barcelona"
  }
]

db.Location.deleteMany({}, (err, locations)=>{
  db.Location.create(location_list, (err, locations)=>{
    if(err) {
      console.log(err);
      return;
    }
    console.log('recreated all location');
    console.log(`created ${locations.length} locations`)
  })
})