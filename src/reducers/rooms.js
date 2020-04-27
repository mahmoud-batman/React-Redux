import {
  GET_ROOMS,
  SORT_ROOMS,
  TYPE_FILTER,
  CAPACITY_FILTER,
  PRICE_FILTER,
  MIN_SIZE_FILTER,
  MAX_SIZE_FILTER,
  BREAKFAST_FILTER,
  PETS_FILTER
} from "../actions/types";

const init_state = {
  rooms: [],
  sortedRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};

export default function(state = init_state, action) {
  switch (action.type) {
    case GET_ROOMS:
      let rooms = action.payload;
      console.log(state);

      return {
        ...state,
        rooms, // for filter
        sortedRooms: rooms, // for list
        type: "all",
        capacity: 1,
        price: Math.max(...rooms.map(item => item.price)),
        maxPrice: Math.max(...rooms.map(item => item.price)),
        maxSize: Math.max(...rooms.map(item => item.size)),
        loading: false,
        breakfast: false,
        pets: false
      };

    /**
     * - change the state of filter
     * - sort the sortedRooms from state
     */
    //
    case TYPE_FILTER:
      return {
        ...state,
        type: action.payload.type
      };
    case CAPACITY_FILTER:
      let capacity = parseInt(action.payload.capacity);
      return {
        ...state,
        capacity: capacity
      };

    case PRICE_FILTER:
      let price = parseInt(action.payload.price);
      return {
        ...state,
        price: price
      };
    case MIN_SIZE_FILTER:
      let minSize = parseInt(action.payload.minSize);
      return {
        ...state,
        minSize
      };
    case MAX_SIZE_FILTER:
      let maxSize = parseInt(action.payload.maxSize);
      return {
        ...state,
        maxSize
      };
    case BREAKFAST_FILTER:
      let breakfast = action.payload.breakfast;
      return {
        ...state,
        breakfast
      };
    case PETS_FILTER:
      let pets = action.payload.pets;
      return {
        ...state,
        pets
      };

    case SORT_ROOMS:
      console.log(state);

      let { tempRooms } = action.payload;
      console.log(tempRooms);

      if (state.type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === state.type);
      }

      // filter by capacity
      if (state.capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= state.capacity);
      }

      // filter by price
      tempRooms = tempRooms.filter(room => room.price <= state.price);

      // filter by size
      tempRooms = tempRooms.filter(
        room => room.size >= state.minSize && room.size <= state.maxSize
      );

      // filter by breakfast
      if (state.breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }
      // filter by pets
      if (state.pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }
      return {
        ...state,
        sortedRooms: tempRooms
      };

    default:
      return state;
  }
}
