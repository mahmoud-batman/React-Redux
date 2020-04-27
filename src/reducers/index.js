import { combineReducers } from "redux";
import rooms from "./rooms";
import singleRoom from "./singleRoom";
import featuredRooms from "./featuredRooms";


export default combineReducers({
  roomsReducer: rooms,
  featuredRoomsReducer: featuredRooms,
  singleRoomReducer: singleRoom,
});
