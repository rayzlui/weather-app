import React from 'react';
import PropTypes from 'prop-types';

export function SearchView(props) {
  const { searchWeather } = props;
  const ENTER_KEY = 13;
  return (
    <div className="searchbar">
      <h3 className="search__header">Find Weather At</h3>
      <input
        className="search__inut"
        type="search"
        onKeyDown={event => {
          if (event.keyCode === ENTER_KEY) {
            searchWeather(event.target.value);
            event.target.value = null;
          }
        }}
      />
    </div>
  );
}

SearchView.propTypes = {
  searchWeather: PropTypes.func,
};
