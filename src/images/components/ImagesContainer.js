import { connect } from 'react-redux';
import Images from './Images';

const mapStateToProps = state => ({
  items: state.images.items,
  count: state.images.count,
  offsets: state.images.offsets,
  loaded: state.images.loaded,
  error: state.images.error,
  message: state.images.message,
});

export default connect(
  mapStateToProps
)(Images);
