const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    // This callback is highly useful during development process, jab server request response karne ke liye ready ho jata hai to ye log run ho jayega
})
