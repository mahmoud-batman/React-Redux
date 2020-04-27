import {
  SORT_ROOMS,
  TYPE_FILTER,
  CAPACITY_FILTER,
  PRICE_FILTER,
  MIN_SIZE_FILTER,
  MAX_SIZE_FILTER,
  BREAKFAST_FILTER,
  PETS_FILTER
} from "./types";

export const typeFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: TYPE_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const capacityFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: CAPACITY_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const priceFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: PRICE_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const minSizeFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: MIN_SIZE_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const maxSizeFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: MAX_SIZE_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const breakfastFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: BREAKFAST_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
export const petsFilter = (name, value, rooms) => {
  return function(dispatch) {
    /**
     *  dispatch two actions : filter and sort
     */

    dispatch({
      type: PETS_FILTER,
      payload: {
        [name]: value
      }
    });
    dispatch({
      type: SORT_ROOMS,
      payload: { tempRooms: rooms }
    });
  };
};
