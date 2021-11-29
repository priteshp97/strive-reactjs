import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import favouritesReducer from "../reducers/favouritesReducer";
import thunk from "redux-thunk";
import jobsReducer from "../reducers/jobsReducer";
import searchReducer from "../reducers/searchReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
export default configureStore;
