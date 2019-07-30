import { SearchContainer } from './searchContainer';
import { GiphyContainer } from './giphyContainer';
import React from 'react';
import { WeatherContainer } from './weatherContainer';

export function RootContainer() {
  return (
    <div className="container">
      <SearchContainer />
      <GiphyContainer />
      <WeatherContainer />
    </div>
  );
}
