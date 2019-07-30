import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { WeatherContainer } from '../containers/weatherContainer';

export function GiphyView(props) {
  const [gifNumber, changeGif] = useState(0);
  const { giphyData } = props;
  if (!giphyData) return null;
  const { data } = giphyData;

  return (
    <img
      className="background"
      src={data[gifNumber].images.original.url}
      onClick={() => changeGif(Math.floor(Math.random() * data.length))}
      alt="weather-gif"
    ></img>
  );
}

GiphyView.propTypes = {
  giphyData: PropTypes.object,
  weather: PropTypes.string,
};
