import * as actions from './actionsTypes';
import { weatherKey, giphyKey } from '../APIKEYS.js';

export function fetchError(error) {
  return { type: actions.FETCH_ERROR, error: error };
}

export function fetchWeatherStart(url) {
  return { type: actions.FETCH_WEATHER_START, url: url };
}

export function fetchWeatherSuccess(data) {
  return { type: actions.FETCH_WEATHER_SUCCESS, data: data };
}

export function fetchWeather(location) {
  return async function fetchingWeather(dispatch) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APIKEY=${weatherKey}&units=imperial`;
    dispatch(fetchWeatherStart(url));
    const request = await fetch(url);
    if (request.status === 200) {
      let response = await request.json();
      dispatch(fetchWeatherSuccess(response));
      dispatch(fetchGiphy(response.weather[0].main));
    } else {
      const { status, statusText, url } = request;
      const error = { status, statusText, url };
      dispatch(fetchError(error));
    }
  };
}

export function fetchGiphyStart(url) {
  return { type: actions.FETCH_GIPHY_START, url: url };
}

export function fetchGiphySuccess(data) {
  return { type: actions.FETCH_GIPHY_SUCCESS, data: data };
}

export function fetchGiphy(weather) {
  return async function fetchingGiphy(dispatch) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${weather}&api_key=${giphyKey}&limit=5`;
    dispatch(fetchGiphyStart(url));
    let request = await fetch(url);
    if (request.status === 200) {
      let response = await request.json();
      dispatch(fetchGiphySuccess(response));
    } else {
      const { status, statusText, url } = request;
      const error = { status, statusText, url };
      dispatch(fetchError(error));
    }
  };
}
