const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {

        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    }
);

const Post = model('Post', postSchema);
module.exports = Post;