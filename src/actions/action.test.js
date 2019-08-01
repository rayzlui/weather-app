import {
  fetchError,
  fetchWeatherStart,
  fetchGiphyStart,
  fetchGiphySuccess,
  fetchWeatherSuccess,
} from './actions';
import * as actions from './actionsTypes';

describe('fetchWeatherStart', () => {
  it('should return object', () => {
    const url = 'https://api.weatherunderground.co';
    const wrapper = fetchWeatherStart(url);
    expect(wrapper).toEqual({ type: actions.FETCH_WEATHER_START, url: url });
  });
});

describe('fetchWeatherSuccess', () => {
  it('should return object', () => {
    const data = { city: 'London', weather: [{ description: 'rain' }] };
    const wrapper = fetchWeatherSuccess(data);
    expect(wrapper).toEqual({
      type: actions.FETCH_WEATHER_SUCCESS,
      data: data,
    });
  });
});

describe('fetchGiphyStart', () => {
  it('should return object', () => {
    const url = 'https://apy.giphy.co';
    const wrapper = fetchGiphyStart(url);
    expect(wrapper).toEqual({ type: actions.FETCH_GIPHY_START, url: url });
  });
});

describe('fetchGiphySuccess', () => {
  it('should return object', () => {
    const data = { images: { url: 'some_url_link' } };
    const wrapper = fetchGiphySuccess(data);
    expect(wrapper).toEqual({ type: actions.FETCH_GIPHY_SUCCESS, data: data });
  });
});

describe('fetchError', () => {
  it('should return object', () => {
    const error = { status: 404, statusText: 'Not Found', url: 'some_url' };
    const wrapper = fetchError(error);
    expect(wrapper).toEqual({ type: actions.FETCH_ERROR, error: error });
  });
});
