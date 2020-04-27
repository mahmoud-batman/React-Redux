import { GET_SINGLE_ROOM } from "../actions/types";

const init_state = {
  room: {},
  loading: true
};
export default function(state = init_state, action) {
  switch (action.type) {
    case GET_SINGLE_ROOM:
      return {
        ...state,
        loading: false,
        room: action.payload
      };
    default:
      return state;
  }
}
