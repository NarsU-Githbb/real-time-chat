import { Server, Socket } from "socket.io";
//import { registerChatHandler } from "./chatSock.js";
import { handleLobby } from "./lobbySock.js";

export const initializeSocketRouter = (io: Server): void => {
  io.on("connection", (socket: Socket): void => {
    console.log(`[socket] User connected: ${socket.id}`);

    // Register all of your modular event handlers
    handleLobby(io, socket)
    //registerChatHandler(io, socket);
    //registerLobbyHandler(io, socket);

    socket.on("disconnect", () => {
      console.log(`[socket] User disconnected: ${socket.id}`);
    });
  });
};

