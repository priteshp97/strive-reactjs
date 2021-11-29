export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_SEARCH = "GET_SEARCH";

export const addToFavouritesAction = (jobToAdd) => ({
  type: ADD_TO_FAVOURITES,
  payload: jobToAdd,
});

export const removeFromFavouritesAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: indexToRemove,
});

export const getJobsAction = (search) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" +
          "front" +
          "&limit=10"
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data.data,
        });
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSearchAction = (getSearch) => ({
  type: GET_SEARCH,
  payload: getSearch,
});
