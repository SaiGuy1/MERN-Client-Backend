const db = require('../models');

const show = async (req, res) => {
	try {
		const foundUser = await db.User.findById(req.curUserId)
		// const foundPosts = await db.Post.find({ user: foundUser._id }).populate('location');
		// foundUser.Post = foundLists;
		res.status(200).json(foundUser);
	} catch (err) {
		return res.error(500, "something is wrong. try again");
	}


};

module.exports = {
	show
}
