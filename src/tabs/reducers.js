import { TAB_SELECTED } from './actionTypes';

const tabReducer = (state = {}, action) => {
  switch (action.type) {
    case TAB_SELECTED:
      return { ...state, selectedTab: action.tab };

    default:
      return state;
  }
};

export default tabReducer;
