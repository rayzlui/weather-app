import { WeatherView } from '../views/weatherView';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData.data,
  };
}

export const WeatherContainer = connect(
  mapStateToProps,
  null,
)(WeatherView);
