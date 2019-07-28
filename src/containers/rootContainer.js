import { SearchContainer } from './searchContainer';
import { WeatherContainer } from './weatherContainer';
import React from 'react';

export function RootContainer() {
  return (
    <>
      <SearchContainer />
      <WeatherContainer />
    </>
  );
}
