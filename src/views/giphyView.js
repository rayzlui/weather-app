import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function GiphyView(props) {
  const [gifNumber, changeGif] = useState(0);
  const { giphyData, weather } = props;
  if (!giphyData) return null;
  const { data } = giphyData;

  return (
    <img
      src={data[gifNumber].images.original.url}
      alt={weather}
      onClick={() => changeGif(Math.floor(Math.random() * data.length))}
    />
  );
}

GiphyView.propTypes = {
  giphyData: PropTypes.object,
  weather: PropTypes.string,
};