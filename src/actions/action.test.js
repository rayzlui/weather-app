import {
  fetchWeatherError,
  fetchWeatherStart,
  fetchGiphyStart,
  fetchGiphySuccess,
  fetchGiphyError,
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

describe('fetchWeatherError', () => {
  it('should return object', () => {
    const error = { status: 404, statusText: 'Not Found', url: 'some_url' };
    const wrapper = fetchWeatherError(error);
    expect(wrapper).toEqual({
      type: actions.FETCH_WEATHER_ERROR,
      error: error,
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

describe('fetchGiphyError', () => {
  it('should return object', () => {
    const error = { status: 404, statusText: 'Not Found', url: 'some_url' };
    const wrapper = fetchGiphyError(error);
    expect(wrapper).toEqual({ type: actions.FETCH_GIPHY_ERROR, error: error });
  });
});
