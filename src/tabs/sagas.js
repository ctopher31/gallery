import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { TAB_SELECTED } from './actionTypes';
import { tabSelected } from './actions';

export function* tabSelectedSaga(action) {
  yield put(tabSelected(action.tab));
}

export function* watchTabSelectedSaga() {
  yield takeLatest(TAB_SELECTED, tabSelectedSaga);
}

export function* tabsRootSaga() {
  yield all([
    fork(tabSelectedSaga),
    fork(watchTabSelectedSaga),
  ]);
}
