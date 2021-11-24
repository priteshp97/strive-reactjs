import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          fav: [...state.favourites.fav, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          fav: state.favourites.fav.filter((el, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
