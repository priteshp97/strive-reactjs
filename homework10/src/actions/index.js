export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavouritesAction = (jobToAdd) => ({
  type: ADD_TO_FAVOURITES,
  payload: jobToAdd,
});

export const removeFromFavouritesAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: indexToRemove,
});
