import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function GiphyView(props) {
  const [gifNumber, changeGif] = useState(0);
  const { giphyData } = props;
  if (!giphyData) return null;
  const { data } = giphyData;

  return (
    <img
      className="image"
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
