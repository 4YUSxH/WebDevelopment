import { Server } from "socket.io";

let io; // This represent server in communication

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);
  });

  console.log("Sokcet.io server is running");
};

export const getIo = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
};

// socket.id: It is a unique id which is provided to user by socket.io, It helps in identifying the user among multiple users, It is not permanent when a user reconnected to server it will change
