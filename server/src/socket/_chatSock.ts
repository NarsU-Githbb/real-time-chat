import { Server, Socket, Namespace } from "socket.io";
import type { addRooms } from "./lobbySock.js";

export interface ChatScreen {
  // Instead of an empty array template [], type it to accept your room structure
  room: addRooms | null; 
  messages: Array<{ sender: addRooms["socketId1"] | addRooms["socketId2"]; text: string; timestamp: Date }>;
  expiryTimeout: any; 
}

// all the chat logic needing socket
export const registerChatHandler = 