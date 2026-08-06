const { default: mongoose } = require("mongoose");

// This is edge collection schema
const followSchema = mongoose.Schema({
    follower: {
        type: String,
    },
    followee: {
        type: String,
    },
    status: {
        type: String,
        default: "pending",
        enum: {
            values: ["pending",  "accepted", "rejected"],
            message: "Status can only be pending, accpeted or rejected"
        }
    }
}, {
    timestamps: true
})

// Check5 : Indexing, schema level check(validation)
followSchema.index({follower: 1, followee: 1}, {unique: true})
// User can only follow any user one time, this is schema level validator 
// Validator means which user's req we can process and which req we cant process, this keeps our application and database safe  

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel