import React from 'react';
import PropTypes from 'prop-types';
import { InputView } from './inputView';

export function SearchView(props) {
  const { searchWeather, weatherData } = props;
  const { data, error, isFetching } = weatherData;

  let className = 'searchbar';
  let header = 'IS IT FUCKING RAINING AT';
  let message = null;

  if (!data) {
    className = 'searchbar--intro';
    header = 'IS IT FUCKING RAINING';
    message = <p className="fun-message">hey where u from</p>
  }

  if (error) {
    message = (
      <p className="error-message">
        Dear Kind Person. We are unable to find the city, please try again. Or
        please use a zip code if you have tried multiple times.
      </p>
    );
  }

  let display = (
    <>
      <h1 className="search__header">{header}</h1>
      {message}
      <InputView searchWeather={searchWeather} />
    </>
  );

  if (isFetching) {
    display = <h1 className="fetching-message">FUCKING SEARCHING</h1>;
  }

  return <div className={className}>{display}</div>;
}

SearchView.propTypes = {
  searchWeather: PropTypes.func,
  weatherData: PropTypes.object,
};
