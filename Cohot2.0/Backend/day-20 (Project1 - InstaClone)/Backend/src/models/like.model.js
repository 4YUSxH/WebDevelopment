const { default: mongoose } = require("mongoose");

const likeSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "Post id is required for creatign a like"]
    },
    user: {
        type: String,
        required: [true, "Username is required for creatign a like"]
    }
},{timestamps: true})

// This wont repeat same document means if a user alerady liked a post then he cant like that already liekd post again and again
likeSchema.index({post: 1, user: 1}, {unique: true})

const likeModel = mongoose.model("likes", likeSchema)

module.exports = likeModel