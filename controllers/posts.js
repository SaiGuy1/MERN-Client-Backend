const db = require('../models');

const create = async (req, res) => {
    try {
        // Grabs User Info from JWT token
        const createdPost = await db.Post.create({ ...request.body,user: req.curUserId});
        const responseObj = {
            status: 200,
            data: createdPost,
            requestedAt: newDate().toLocaleString()
        };
        response.status(200).json(responseObj);
    }   catch (error) { 
        return response
        .status(500)
        .json({message: 'Something went wrong, try again', error: error});
    };
};

module.exports = {
    create
}