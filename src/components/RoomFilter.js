import React, { Component } from "react";

import Title from "../components/Title";
import {
  typeFilter,
  capacityFilter,
  priceFilter,
  minSizeFilter,
  maxSizeFilter,
  breakfastFilter,
  petsFilter
} from "../actions";
import { connect } from "react-redux";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

class RoomFilter extends Component {
  handleChange = event => {
    const { rooms } = this.props;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    /**
     *  trigger filter action
     */
    if (name === "type") {
      this.props.typeFilter(name, value, rooms);
    }
    if (name === "capacity") {
      this.props.capacityFilter(name, value, rooms);
    }
    if (name === "price") {
      this.props.priceFilter(name, value, rooms);
    }
    if (name === "minSize") {
      this.props.minSizeFilter(name, value, rooms);
    }
    if (name === "maxSize") {
      this.props.maxSizeFilter(name, value, rooms);
    }
    if (name === "breakfast") {
      this.props.breakfastFilter(name, value, rooms);
    }
    if (name === "pets") {
      this.props.petsFilter(name, value, rooms);
    }
  };
  render() {
    const {
      rooms,
      type,
      capacity,
      price,
      maxPrice,
      minPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.props;

    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    // get unique people capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/*select type  */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={this.handleChange}
            >
              {types}
            </select>
          </div>
          {/* end select type */}
          {/*guests   */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={this.handleChange}
            >
              {people}
            </select>
          </div>
          {/* end guests  */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          {/* end of room price */}
          {/* size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={this.handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={this.handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* end of size */}
          {/* extras  */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={this.handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={this.handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* end of extras */}
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  type: state.roomsReducer.type,
  capacity: state.roomsReducer.capacity,
  price: state.roomsReducer.price,
  maxPrice: state.roomsReducer.maxPrice,
  minPrice: state.roomsReducer.minPrice,
  minSize: state.roomsReducer.minSize,
  maxSize: state.roomsReducer.maxSize,
  breakfast: state.roomsReducer.breakfast,
  pets: state.roomsReducer.pets

  // loading: state.featuredRoomsReducer.loading
});

export default connect(
  mapStateToProps,
  {
    typeFilter,
    capacityFilter,
    priceFilter,
    minSizeFilter,
    maxSizeFilter,
    breakfastFilter,
    petsFilter
  }
)(RoomFilter);
