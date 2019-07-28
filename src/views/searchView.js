import React from 'react';
import PropTypes from 'prop-types';

export function SearchView(props) {
  const { searchWeather } = props;
  const ENTER_KEY = 13;
  return (
    <>
      <h3>Find Weather At:</h3>
      <input
        type="search"
        initialValue="location"
        onKeyDown={event => {
          if (event.keyCode === ENTER_KEY) {
            searchWeather(event.target.value);
            event.target.value = null;
          }
        }}
      />
    </>
  );
}

SearchView.propTypes = {
  searchWeather: PropTypes.func,
};
