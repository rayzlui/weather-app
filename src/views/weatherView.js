import React from 'react';
import PropTypes from 'prop-types';

export function WeatherView(props) {
  const { weatherData, giphyData } = props;
  if (!weatherData || !giphyData) return null;
  const { weather, main, wind, name, visibility } = weatherData;
  return (
    <div>
      <section>
        <h1>{name}</h1>
        <h3>It is currently: {weather[0].description}</h3>
        <img
          src={giphyData.data[0].images.original.url}
          alt={weather[0].description}
        />
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
  giphyData: PropTypes.object,
  searchWeather: PropTypes.func,
};
