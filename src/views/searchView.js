import React from 'react';
import PropTypes from 'prop-types';
import { InputView } from './inputView';

export function SearchView(props) {
  const { searchWeather, weatherData } = props;
  const { data, error, isFetching } = weatherData;
  let display;
  let className = 'searchbar';
  let header = 'IS IT FUCKING RAINING';
  let errorMess = null;
  if (!data) {
    className = 'searchbar--intro';
  } else {
    header = 'IS IT ALSO FUCKING RAINING AT';
  }
  if (error) {
    errorMess = (
      <p className="error-message">
        Unable to find city, please try again. Or please use a zip code if you
        you have tried multiple times.
      </p>
    );
  }
  if (isFetching) {
    display = <h1>FUCKING SEARCHING</h1>;
  } else {
    display = (
      <>
        <h1 className="search__header">{header}</h1>
        {errorMess}
        <InputView searchWeather={searchWeather} />
      </>
    );
  }
  return <div className={className}>{display}</div>;
}

SearchView.propTypes = {
  searchWeather: PropTypes.func,
  weatherData: PropTypes.object,
};
