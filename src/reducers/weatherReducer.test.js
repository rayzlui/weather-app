import * as actions from '../actions/actionsTypes';
import { initialState, weatherReducer } from './weatherReducer';

describe('weatherReducer', () => {
  it('should handle action', () => {
    const action = { type: actions.FETCH_WEATHER_START };
    const wrapper = weatherReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: true,
      data: null,
      error: null,
    });
  });
  it('should handle action', () => {
    const mockData = { image: { url: 'some_url' } };
    const action = { type: actions.FETCH_WEATHER_SUCCESS, data: mockData };
    const wrapper = weatherReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: false,
      data: mockData,
      error: null,
    });
  });
  it('should handle action', () => {
    const mockError = { status: 404, statusText: 'Not Found' };
    const action = { type: actions.FETCH_WEATHER_ERROR, error: mockError };
    const wrapper = weatherReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: false,
      data: null,
      error: mockError,
    });
  });
  it('should handle action', () => {
    const action = { type: actions.FETCH_GIPHY_START };
    const wrapper = weatherReducer(initialState, action);
    expect(wrapper).toEqual(initialState);
  });
});
