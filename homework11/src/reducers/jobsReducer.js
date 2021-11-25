import { GET_JOBS } from "../actions";
import { initialState } from "../store";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;
