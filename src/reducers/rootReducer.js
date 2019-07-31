import { weatherReducer } from './weatherReducer';
import { giphyReducer } from './giphyReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  weatherData: weatherReducer,
  giphyData: giphyReducer,
});
