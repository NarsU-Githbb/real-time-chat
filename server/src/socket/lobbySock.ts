import { Server, Socket } from "socket.io";
import { tokenRandomizer } from "../utils/randomizer.js";

interface CustomSocket extends Socket {
  username?: string;
}

export interface addRooms {
  ID: string; 

  username1: string;

  username2: string;
    }

const activeRoom: addRooms[] = []

//HELPER FUNCTION DELETE LATER
const logRoomContents = (io: Server, roomId: string) => {
  const activeSocketsInRoom = io.sockets.adapter.rooms.get(roomId);
  console.log(`[ROOM STATUS] Channel "${roomId}" active connections count:`, activeSocketsInRoom ? activeSocketsInRoom.size : 0);
  if (activeSocketsInRoom) {
    console.log(`              Active Socket IDs inside:`, Array.from(activeSocketsInRoom));
  }
};

//Logic for when user1 presses connect after giving the username in begin/
export function handleLobby(io: Server, socket: CustomSocket) {
  socket.on("create_room", (data: {username: string}) => {
     console.log(`${data.username} is creating a room.`);
      
     

  // Store the username directly on the socket instance for future tracking
    socket.username = data.username;

  const secureRoomId = tokenRandomizer();
  logRoomContents(io, secureRoomId);
  // When a user connects, immediately send them the secure room ID

   activeRoom.push({
      ID: secureRoomId,
      username1: data.username,
      username2: ""   
    });

socket.join(secureRoomId);

  socket.emit("room_made", {
    
      roomId: secureRoomId,
    })

  })

    socket.on("join_lobby_channel", (data: { roomId: string }) => {
    socket.join(data.roomId); // 👈 CRUCIAL: Re-attaches User 1's active connection string to the channel
    console.log(`User 1 synced to channel: ${data.roomId}`);
    logRoomContents(io, data.roomId); // DELETE LATER
  });

socket.on("verify_room", (data: { roomId: string }, callback) => {
  const foundRoom = activeRoom.find((room) => room.ID === data.roomId);

  if (foundRoom) {
    // Join User 2's socket to the room immediately
    socket.join(data.roomId);
     logRoomContents(io, data.roomId); // DELETE LATER

    // Tell User 1 instantly that someone has connected to their room ID!
    io.to(data.roomId).emit("user2_joined", { systemMessage: "Someone is joining..." });
    
    callback({ success: true });
  } else {
    callback({ success: false, error: "Chatroom ID not in use!" });
  }
});

socket.on("room_ready", (data: { roomId: string; username: string; }, callback) => {
    const foundRoom = activeRoom.find((room) => room.ID === data.roomId);

    if (foundRoom) {
      // Room exists! Assign User 2's socket ID
        socket.username = data.username; 
      foundRoom.username2 = data.username;
      
        socket.join(data.roomId);
      // Let the frontend know it was successful
      callback({ success: true });
      
      // Opt-in: Put both sockets into a standard Socket.io room channel
     
      io.to(data.roomId).emit("user2_name_added", { username: data.username });
    } else {
      // Room not found
      callback({ success: false });
    }
  });
}



