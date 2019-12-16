import { connect } from 'react-redux';
import Videos from './Videos';

const mapStateToProps = state => ({
  items: state.videos.items,
  count: state.videos.count,
  offsets: state.videos.offsets,
  loaded: state.videos.loaded,
  error: state.videos.error,
  message: state.videos.message,
});

export default connect(
  mapStateToProps
)(Videos);
