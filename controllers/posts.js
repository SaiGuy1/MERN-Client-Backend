const db = require('../models');

const create = async (req, res) => {
    try {
        // NOTE - 'curUserId' grabs User ID from jwt token
        const createdPost = await db.Post.create({...req.body, user: req.curUserId});
        const responseObj = {
            id: createdPost._id,
            title: createdPost.title,
            content: createdPost.content,
            createdAt: createdPost.createdAt,
        };
        res.status(200).json(responseObj);
    } catch (error) { 
        return res.status(500).json({message: 'Something went wrong, try again', error: error});
    };
};

const show = async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.id)
        const Post = {
            id: foundPost._id,
            title: foundPost.title,
            content: foundPost.content,
            createdAt: foundPost.createdAt,
        };
        res.status(200).json(Post);
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong, try again', error: error});
    };
};

const userAllPosts = async (req, res) => {
    try {
        const allPosts = await db.Post.find({user: req.curUserId})
        let postList = [];
        for (let i = 0; i < allPosts.length; i++) {
            let responseObj = {
                id: allPosts[i]._id,
                title: allPosts[i].title,
                content: allPosts[i].content,
                createdAt: allPosts[i].createdAt,
            }
            postList.push(responseObj)
        };
        res.status(200).json(postList);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again', error: error });
    };
};

const showAll = async (req, res) => {
    try {
        const allPosts = await db.Post.find({})
        res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong, try again', error: error});
    }
}


module.exports = {
    create,
    show,
    userAllPosts,
    showAll
}