import { initialState, giphyReducer } from './giphyReducer';
import * as actions from '../actions/actionsTypes';

describe('giphyReducer', () => {
  it('should handle action', () => {
    const action = { type: actions.FETCH_GIPHY_START };
    const wrapper = giphyReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: true,
      data: null,
      error: null,
    });
  });
  it('should handle action', () => {
    const mockData = { image: { url: 'some_url' } };
    const action = { type: actions.FETCH_GIPHY_SUCCESS, data: mockData };
    const wrapper = giphyReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: false,
      data: mockData,
      error: null,
    });
  });
  it('should handle action', () => {
    const mockError = { status: 404, statusText: 'Not Found' };
    const action = { type: actions.FETCH_GIPHY_ERROR, error: mockError };
    const wrapper = giphyReducer(initialState, action);
    expect(wrapper).toEqual({
      isFetching: false,
      data: null,
      error: mockError,
    });
  });
  it('should handle action', () => {
    const action = { type: actions.FETCH_WEATHER_START };
    const wrapper = giphyReducer(initialState, action);
    expect(wrapper).toEqual(initialState);
  });
});
