// This file has 2 works : 1. Server creata kana, 2. DB se connect karna

const mongoose = require("mongoose");
const app = require("./src/app")

// Connecting DB
const connectToDB = () => {
    mongoose.connect("mongodb+srv://solo_db_user:<password>.mongodb.net/day-6").then(() => {
        console.log("Connected to Database")
    })
    
}
connectToDB()

app.listen(3000, () => {
    console.log("Running");
})