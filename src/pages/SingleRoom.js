// import { RoomContext } from "../context";
// import Hero from "../components/Hero";

import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRoom } from "../actions/";
class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
    this.props.getRoom(this.state.slug);
  }
  componentDidMount() {
    let slug = this.props.match.params.slug;
    this.props.getRoom(slug);
  }
  render() {
    const { loading, room } = this.props;
    console.log("render", room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const imgs = [images];
    const extrs = [extras];
    const [mainImg, ...defaultImg] = imgs;

    const singleRoom = (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extrs.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
    return <>{loading ? <Loading /> : singleRoom}</>;
  }
}
const mapStateToProps = state => ({
  room: state.singleRoomReducer.room,
  loading: state.singleRoomReducer.loading
});
export default connect(
  mapStateToProps,
  { getRoom }
)(SingleRoom);
