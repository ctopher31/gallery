import { connect } from 'react-redux';
import { tabSelected } from '../actions';
import Tabs from './Tabs';

const mapStateToProps = state => ({ 
  items: state.tabs.items,
  selectedTab: state.tabs.selectedTab,
});

const mapDispatchToProps = dispatch => ({
  tabClickHandler: item => dispatch(tabSelected(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tabs);
