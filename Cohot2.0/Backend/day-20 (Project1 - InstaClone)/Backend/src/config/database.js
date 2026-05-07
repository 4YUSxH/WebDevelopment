const { default: mongoose } = require("mongoose")

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected");
}

module.exports = connectToDB