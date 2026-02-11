const { default: mongoose } = require("mongoose")

const connectToDB = () => {
    mongoose.connect("mongodb+srv://solo_db_user:P0n1a0cVpSL3l2Pj@cluster0.fhvqrv6.mongodb.net/test").then(() => console.log("Connected"))
}

module.exports = connectToDB