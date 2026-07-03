import { Server, Socket } from "socket.io";
import type { addRooms } from "./lobbySock.js";

export interface ChatScreen {
  // Instead of an empty array template [], type it to accept your room structure
  room: string | null; 
  messages: Array<{ sender: string 
    text: string; 
    timestamp: Date }>;

  expiryTimeout: any; 
}

// all the chat logic needing socket
export function handleChat(io: Server, socket: Socket) {
  socket.on("sync_chat", (data: { roomId: string }) => {
    socket.join(data.roomId);
   }) 
// Inside your backend handleLobby/chat handler function:
socket.on("send_chat_message", (data: { roomId: string; sender: string; text: string; timestamp: string }) => {
  // Broadcasts the incoming payload string instantly to everyone joined to that Room ID channel
  io.to(data.roomId).emit("receive_message", data);
});
} ;
