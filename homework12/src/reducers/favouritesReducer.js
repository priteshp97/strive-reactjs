import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";
import { initialState } from "../store";

const favouritesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        fav: state.fav.filter((el, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
