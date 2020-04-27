import React, { Component } from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
// import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import { connect } from "react-redux";
import { getRooms } from "../actions";

class RoomContainer extends Component {
  // const { loading, sortedRooms, rooms } = context;
  // if (loading) {
  //   return <Loading />;
  // }
  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    const { rooms, sortedRooms, loading } = this.props;
    return (
      <>
        <RoomsFilter rooms={rooms} />
        {loading ? <Loading /> : <RoomsList rooms={sortedRooms} />}
      </>
    );
  }
}
const mapStateToProps = state => ({
  rooms: state.roomsReducer.rooms,
  sortedRooms: state.roomsReducer.sortedRooms,
  loading: state.roomsReducer.loading
});

export default connect(
  mapStateToProps,
  { getRooms }
)(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello Froms Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
