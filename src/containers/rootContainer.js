import { connect } from 'react-redux';
import { RootView } from '../views/rootView';

function mapStateToProps(state) {
  return {
    intro: state.weatherData.data === null,
  };
}

export const RootContainer = connect(mapStateToProps, null)(RootView);
