import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { getFeaturedRooms } from "../actions";

class FeaturedRooms extends Component {
  componentDidMount() {
    this.props.getFeaturedRooms();
  }

  render() {
    let { loading, rooms } = this.props;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
        <Link to="/rooms" className="btn-more">
          More rooms
        </Link>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  rooms: state.featuredRoomsReducer.featuredRooms,
  loading: state.featuredRoomsReducer.loading
});

export default connect(
  mapStateToProps,
  { getFeaturedRooms }
)(FeaturedRooms);
