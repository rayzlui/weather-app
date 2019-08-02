import { SearchContainer } from '../containers/searchContainer';
import { GiphyContainer } from '../containers/giphyContainer';
import React from 'react';

import { WeatherContainer } from '../containers/weatherContainer';
import PropTypes from 'prop-types';

export function RootView(props) {
  const { intro } = props;
  let className = 'container';
  if (intro) {
    className = 'container container--intro';
  }
  return (
    <div className={className}>
      <SearchContainer />
      <GiphyContainer />
      <WeatherContainer />
    </div>
  );
}

RootView.propTypes = {
  intro: PropTypes.bool,
};
