import React from 'react';
import PropTypes from 'prop-types';
import { InputView } from './inputView'

export function SearchView(props) {
  const { searchWeather, data } = props;
  let className = 'searchbar';
  if (!data) {
    className = 'searchbar--intro';
  }
  return (
    <div className={className}>
      <h3 className="search__header">IS IT RAINING AT </h3>
      <InputView searchWeather={searchWeather} />
    </div>
  );
}

SearchView.propTypes = {
  searchWeather: PropTypes.func,
  data: PropTypes.object,
};
