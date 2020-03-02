const db = require('../models');

const show = async (req, res) => {
	try {
		console.log('curUserId',req.curUserId);
		const foundUser = await db.User.findById(req.curUserId)
		// const foundPosts = await db.Post.find({ user: foundUser._id }).populate('location');
		const User = {
			'username':foundUser.username,
			'email':foundUser.email,
			'createdAt':foundUser.createdAt
		}
		res.status(200).json({User});
	} catch (err) {
		return res.error(500, "something is wrong. try again");
	}
};

const update = async(req, res) => {
	try{
		const updatedUser = await db.User.findByIdAndUpdate(req.curUserId, req.body, {new:true})
		res.status(200).json({updatedUser});
	}
	catch (err){
		return res.error(500, "something is wrong. try again");
	}
}

module.exports = {
	show,
	update
}
