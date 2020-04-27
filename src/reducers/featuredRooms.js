import { GET_FEATURED_ROOMS } from "../actions/types";

const init_state = {
  featuredRooms: [],
  loading: true
};
export default function(state = init_state, action) {
  switch (action.type) {
    case GET_FEATURED_ROOMS:
      return {
        ...state,
        loading: false,
        featuredRooms: action.payload
      };
    default:
      return state;
  }
}
