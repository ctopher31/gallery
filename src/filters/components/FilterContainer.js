import { connect } from 'react-redux';
import Filters from './Filters';

const mapStateToProps = state => ({ filters: state.filters });

export default connect(
  mapStateToProps
)(Filters);
