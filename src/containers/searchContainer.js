import { connect } from 'react-redux';
import { fetchWeather } from '../actions/actions';
import { SearchView } from '../views/searchView';

function mapDispatchToProps(dispatch) {
  return {
    searchWeather: location => dispatch(fetchWeather(location)),
  };
}

export const SearchContainer = connect(
  null,
  mapDispatchToProps,
)(SearchView);
