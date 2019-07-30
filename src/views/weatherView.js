import React from 'react';
import PropTypes from 'prop-types';

export function WeatherView(props) {
  const { weatherData } = props;
  if (!weatherData) return null;
  const { weather, main, wind, name, visibility } = weatherData;
  const accessWeather = weather[0];
  return (
    <div className="weather-container">
      <h2 className="weather__header">
        {name} is currently {accessWeather.description}
      </h2>
      <section className="weather__temp">
        <h3>Current Temperature: {main.temp} F*</h3>
        <p>
          Low: {main.temp_min} to High: {main.temp_max}
        </p>
      </section>
      <section className="weather__wind">
        <h3>Wind</h3>
        <p>
          {wind.speed}mph to {wind.deg}
        </p>
      </section>
      <section className="weather__humidity">
        <h3>Humidity</h3>
        <p>{main.humidity}</p>
      </section>
      <section className="weather__visibility">
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
