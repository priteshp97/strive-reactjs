import { GET_SEARCH } from "../actions";
import { initialState } from "../store";

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
