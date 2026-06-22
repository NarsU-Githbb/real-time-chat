import { Server, Socket, Namespace } from "socket.io";
import { tokenRandomizer } from "../utils/randomizer.js";


//Logic for when user1 presses connect after giving the username in begin/
export function handleLobby(io: Server, socket: Socket) {
  socket.on("create_room", () => {
     console.log("create_room received");
  const secureRoomId = tokenRandomizer();
  // When a user connects, immediately send them the secure room ID
  socket.emit("room_created", {
    
      roomId: secureRoomId,
    })

  })

}
//export const registerLobbyHandler = 