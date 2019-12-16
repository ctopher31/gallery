import { all, fork, put, call } from 'redux-saga/effects';
import { getImagesSuccess, getImagesFailure } from './actions';
import { getImages } from './services';

export function* getImagesSaga() {
  try {
    const images = yield call(getImages);
    yield put(getImagesSuccess(images));
  } catch (error) {
    yield put(getImagesFailure(error));
  }
}

export function* tabsRootSaga() {
  yield all([
    fork(getImagesSaga),
  ]);
}
