import app  from "./src/app.js";
import { createServer } from "http";
import {Server} from "socket.io"

const httpServer = createServer(app) // Creating express app part with http server
const io = new Server(httpServer, { }) // Attaching http server to socketIo 

// When a user is connected to our SocketIo it will execute this callback
io.on("connection", (socket) => {
    console.log("User connected")

    // For this particular connected user, listen for an event named message
    socket.on("message", (msg) => {
        console.log("User fired a message event", msg);

        io.emit("abc", msg) // Server will emit 'abc' event, these event wll affect all to connected users to server that are listening to this event
        
    }) // Jab ek single user 'message' event for fire karega to hum uss event ko listen karke callback run kar denge
    // we can also send data with event data could be in text, json, html formate
})


// Starting http server 
httpServer.listen(3000, () => {
    console.log("Running")
})

// app.listen(3000, () => {console.log("Running")})
// SocketIo does not work well with express this is why we need to go raw means We have to use 'http' module and express is also based on 'http' module, 'http' is nothing but the raw form of express.js   