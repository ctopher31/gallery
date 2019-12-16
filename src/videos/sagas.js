import { all, fork, put, call } from 'redux-saga/effects';
import { getVideosSuccess, getVideosFailure } from './actions';
import { getVideos } from './services';

export function* getVideosSaga() {
  try {
    const videos = yield call(getVideos);
    yield put(getVideosSuccess(videos));
  } catch (error) {
    yield put(getVideosFailure(error));
  }
}

export function* tabsRootSaga() {
  yield all([
    fork(getVideosSaga),
  ]);
}
