const db = require('../models');


const show = async (req, res) => {
  try {
    const AllLocation = await db.Location.find({});
    res.status(200).json({AllLocation})
  }
  catch (err) {
    return res.error(500, "something is wrong. try again");
  }
}

module.exports = {
  show
}
