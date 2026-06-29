//logic that I should implement inside main.tsx in the future maybe??



import { io } from "socket.io-client";



const SOCKET_URL = "http://localhost:3000";

export const socket = io(SOCKET_URL, {
  autoConnect: false, // CRUCIAL: Keeps socket dead during Steps 1 & 2
  reconnectionAttempts: 5,
  timeout: 10000,
  // This auth object can be mutated dynamically right before you call .connect()
  auth: {
    username: "",
    chatId: ""
  }
});

// Logs for dev debugging
socket.on("connect", () => console.log(`Connected as ${socket.id}`));
socket.on("connect_error", (err) => console.error("Connection error:", err.message));