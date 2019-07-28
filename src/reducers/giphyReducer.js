import {
  FETCH_GIPHY_START,
  FETCH_GIPHY_SUCCESS,
  FETCH_ERROR,
} from '../actions/actionsTypes';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

export function giphyReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case FETCH_GIPHY_START:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        error: null,
      });
    case FETCH_GIPHY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        error: null,
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        error: action.error,
      });
    default:
      return state;
  }
}
