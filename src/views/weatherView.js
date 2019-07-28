import React from 'react';
import PropTypes from 'prop-types';

export function WeatherView(props) {
  const { weatherData, giphyData } = props;
  if (!weatherData || !giphyData) return null;
  const { weather, main, wind, name, visibility } = weatherData;
  const accessWeather = weather[0];
  const { data } = giphyData;
  let gifNumber = Math.floor(Math.random() * data.length);
  return (
    <div>
      <section>
        <h1>{name}</h1>
        <h3>It is currently: {accessWeather.description}</h3>
        <img
          src={data[gifNumber].images.original.url}
          alt={accessWeather.description}
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
