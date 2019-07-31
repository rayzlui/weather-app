import React from 'react';
import PropTypes from 'prop-types';

export function SearchView(props) {
  const { searchWeather, intro } = props;
  const ENTER_KEY = 13;
  let className = 'searchbar';
  if (intro) {
    className = 'searchbar--intro';
  }
  return (
    <div className={className}>
      <h3 className="search__header">IS IT RAINING AT </h3>
      <input
        className="search__input"
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
  intro: PropTypes.bool,
};
