import { connect } from 'react-redux';
import { fetchWeather } from '../actions/actions';
import { SearchView } from '../views/searchView';

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchWeather: location => dispatch(fetchWeather(location)),
  };
}

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchView);
