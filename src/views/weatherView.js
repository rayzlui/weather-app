import React from 'react';
import PropTypes from 'prop-types';
import { GiphyContainer } from '../containers/giphyContainer';

export function WeatherView(props) {
  const { weatherData } = props;
  if (!weatherData) return null;
  const { weather, main, wind, name, visibility } = weatherData;
  const accessWeather = weather[0];
  return (
    <div>
      <section>
        <h2>
          {name} is currently {accessWeather.description}
        </h2>
        <GiphyContainer weather={accessWeather.description} />
      </section>
      <section>
        <h3>Current Temperature: {main.temp} F*</h3>
        <p>
          Low: {main.temp_min} to High: {main.temp_max}
        </p>
        <h3>Wind</h3>
        <p>
          {wind.speed}mph to {wind.deg}
        </p>
        <h3>Humidity</h3>
        <p>{main.humidity}</p>
        <h3>Visibility</h3>
        <p>{visibility}</p>
      </section>
    </div>
  );
}

WeatherView.propTypes = {
  weatherData: PropTypes.object,
  searchWeather: PropTypes.func,
};
