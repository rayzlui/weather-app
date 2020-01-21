import { connect } from 'react-redux';
import { GiphyView } from '../views/giphyView';

function mapStateToProps(state) {
  return {
    giphyData: state.giphyData.data,
  };
}

export const GiphyContainer = connect(mapStateToProps, null)(GiphyView);
