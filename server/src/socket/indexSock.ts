import { Server, Socket } from "socket.io";
import { registerChatHandler } from "./chatSock.js";
import { registerLobbyHandler } from "./lobbySock.js";

export const initializeSocketRouter = (io: Server): void => {
  io.on("connection", (socket: Socket): void => {
    console.log(`[socket] User connected: ${socket.id}`);

    // Register all of your modular event handlers
    registerChatHandler(io, socket);
    registerLobbyHandler(io, socket);

    socket.on("disconnect", () => {
      console.log(`[socket] User disconnected: ${socket.id}`);
    });
  });
};

