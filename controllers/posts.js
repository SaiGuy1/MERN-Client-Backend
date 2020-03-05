const db = require('../models');

const create = async (req, res) => {
    try {
        // NOTE - 'curUserId' grabs User ID from jwt token
        const createdPost = await db.Post.create({ ...req.body, user: req.curUserId });
        const responseObj = {
            id: createdPost._id,
            title: createdPost.title,
            content: createdPost.content,
            createdAt: createdPost.createdAt,
            location: createdPost.location,
        };
        res.status(200).json(responseObj);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again', error: error });
    };
};

const show = async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.id);
        const Post = {
            id: foundPost._id,
            title: foundPost.title,
            content: foundPost.content,
            createdAt: foundPost.createdAt,
        };
        res.status(200).json(Post);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again', error: error });
    };
};

const userAllPosts = async (req, res) => {
    try {
        const allPosts = await db.Post.find({ user: req.curUserId });
        let postList = [];
        for (let i = 0; i < allPosts.length; i++) {
            let responseObj = {
                id: allPosts[i]._id,
                title: allPosts[i].title,
                content: allPosts[i].content,
                createdAt: allPosts[i].createdAt,
            };
            postList.push(responseObj);
        };
        res.status(200).json(postList);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again', error: error });
    };
};

const showAll = async (req, res) => {
    try {
        const allPosts = await db.Post.find(req.query);
        res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong, try again', error: error });
    };
};

const update = async (req, res) => {
    try {
        let foundPost = await db.Post.findById(req.params.id);
        console.log(foundPost.user)
        console.log(req.curUserId)
        if (foundPost.user == req.curUserId) {
            foundPost.title = req.body.title;
            foundPost.content = req.body.content;
            foundPost.location = req.body.location;
            foundPost.save();
            const responseObj = {
                id: foundPost.id,
                title: foundPost.title,
                content: foundPost.content,
                location: foundPost.location,
                createdAt: foundPost.createdAt,
            };
            res.status(200).json(responseObj)
        } else {
            return res.status(401).json({message: 'You are not authorized to complete this action'})
        }
    } catch (error) {
        return res.status(401).json({ message: 'Something went wrong, please try again', errror: error });
    };
};

const destroy = async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.id);
        console.log(foundPost)
        if (foundPost.user == req.curUserId) {
            responseObj = {
                id: foundPost.id,
                title: foundPost.title,
                content: foundPost.content,
                location: foundPost.location,
            }
            await db.Post.findByIdAndDelete(foundPost._id);
            res.status(200).json(responseObj)
        } else {
            return res.status(401).json({ message: 'You are not authorized to complete this action' })
        }
    } catch (error) {
        res.status(500).json({message: 'Something went wrong, please try again', error: error});
    };
};

module.exports = {
    create,
    show,
    userAllPosts,
    showAll,
    update,
    destroy
}