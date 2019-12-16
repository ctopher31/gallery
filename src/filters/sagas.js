import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { FILTER_SELECTED } from './actionTypes';
import { filterSelected } from './actions';

export function* filterSelectedSaga(action) {
  yield put(filterSelected(action.filter));
}

export function* watchFilterSelectedSaga() {
  yield takeLatest(FILTER_SELECTED, filterSelectedSaga);
}

export function* tabsRootSaga() {
  yield all([
    fork(filterSelectedSaga),
    fork(watchFilterSelectedSaga),
  ]);
}
