import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favouritesReducer from "../reducers/favouritesReducer";
import thunk from "redux-thunk";
import jobsReducer from "../reducers/jobsReducer";
import searchReducer from "../reducers/searchReducer";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourites: {
    fav: [],
  },
  jobs: {
    content: [],
  },
  search: {
    content: "",
  },
};

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  search: searchReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export default configureStore;
