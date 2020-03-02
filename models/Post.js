const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A title is required to create a Post'],
        maxlength: [50, 'Post title cannot exceed 50 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required to create a Post'],
        maxlength: [700, 'Content cannot exceed 700 characters']
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;