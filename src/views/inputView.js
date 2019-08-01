import React from 'react';
import PropTypes from 'prop-types';

export function InputView(props) {
  const { searchWeather } = props;
  const ENTER_KEY = 13;
  return (
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
  );
}

InputView.propTypes = {
  searchWeather: PropTypes.func,
};
