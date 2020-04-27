import Client from "../Contentful";

import { GET_ROOMS, GET_SINGLE_ROOM, GET_FEATURED_ROOMS } from "./types";

// GET_ROOMS
export const getRooms = () => {
  return async dispatch => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        // order: "sys.createdAt"
        order: "-fields.price"
      });
      dispatch({
        type: GET_ROOMS,
        payload: formatData(response.items)
      });
    } catch (error) {
      console.log(error);
      dispatch({
        // type: ERROR,
        payload: error
      });
    }
  };
};
// GET_SINGLE_ROOM
export const getRoom = slug => {
  return async dispatch => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        "fields.slug": slug
      });
      const room = formatData(response.items)[0];

      dispatch({
        type: GET_SINGLE_ROOM,
        payload: room
      });
    } catch (error) {
      console.log(error);
      dispatch({
        // type: ERROR,
        payload: error
      });
    }
  };
};

// GET_FEATURED_ROOMS
export const getFeaturedRooms = () => {
  return async dispatch => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        // order: "sys.createdAt",
        order: "-fields.price",
        "fields.featured": true
      });
      console.log(response);
      dispatch({
        type: GET_FEATURED_ROOMS,
        payload: formatData(response.items)
      });
    } catch (error) {
      console.log(error);
      dispatch({
        // type: ERROR,
        payload: error
      });
    }
  };
};
// Format Contenful data to simpler format
function formatData(items) {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);

    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}
