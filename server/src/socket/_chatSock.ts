import { Server, Socket, Namespace } from "socket.io";

const activeRooms = {
  "room-xyz-123": {
    users: {
      socketId1: { username: "Alice" },
      socketId2: { username: "Bob" }
    },
    messages: [
      { sender: "Alice", text: "Hello!", timestamp: 1718712345 }
    ],
    expiryTimeout: null // Used for the self-destruct timer
  }
};

// all the chat logic needing socket
export const registerChatHandler = 