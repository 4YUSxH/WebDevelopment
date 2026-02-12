const { default: mongoose } = require("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected"))
}

module.exports = connectToDB