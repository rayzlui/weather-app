import { WeatherView } from '../views/weatherView';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData.data,
    giphyData: state.giphyData.data,
  };
}

export const WeatherContainer = connect(
  mapStateToProps,
  null,
)(WeatherView);
