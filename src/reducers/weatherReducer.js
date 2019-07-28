import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_ERROR,
} from '../actions/actionsTypes';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export function weatherReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case FETCH_WEATHER_START:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        data: null,
      });
    case FETCH_WEATHER_SUCCESS:
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
