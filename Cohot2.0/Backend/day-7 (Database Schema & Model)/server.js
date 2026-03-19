require("dotenv").config() 
const { default: mongoose } = require("mongoose");
const app = require("./src/app");
const connectToDB = require("./src/config/database");


connectToDB()

app.listen(3000, () => {
    console.log("Running");
})