const express = require("express")

const app = express() // server instance created

// Programming server
app.get('/', (req, res) => { // request, response
    res.send("Hello")
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.listen(3000) // server started

// Re-execute node server.js after making any changes in server file for reflecting changes 
// With nodemon we can stop re-execute step, use npx nodemon server.js automatecly run npm server.js command when any changes occur
// npm -> Node Package Manager, npx -> Node Package Executor