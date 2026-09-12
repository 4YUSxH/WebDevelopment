import app from './src/app.js'
import connectToDB from './src/config/database.js'
import http from 'http'
import { initSocket } from "./src/sockets/server.socket.js";
import { serachInternet } from './src/services/internet.service.js';

const PORT = process.env.PORT || 8000

const httpServer = http.createServer(app)

initSocket(httpServer)

connectToDB()

httpServer.listen(PORT, () => {console.log("Running, Port: " + PORT)})