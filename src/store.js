import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitor-reducers';
import loggerMiddleware from './middleware/logger';
import imagesReducer from './images/reducers';
import videosReducer from './videos/reducers';
import filtersReducer from './filters/reducers';
import tabsReducer from './tabs/reducers';
import { imagesRootSaga } from './images/sagas';
import { videosRootSaga } from './videos/sagas';
import { filtersRootSaga } from './filters/sagas';
import { tabsRootSaga } from './tabs/sagas';

const rootReducer = combineReducers({
  // images: imagesReducer,
  // videos: videosReducer,
  // filters: filtersReducer,
  tabs: tabsReducer,
});

function* rootSaga() {
  yield all([
    // fork(imagesRootSaga),
    // fork(videosRootSaga),
    // fork(filtersRootSaga),
    fork(tabsRootSaga),
  ]);
}

export const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware, sagaMiddleware);
  const enhancers = composeWithDevTools(middleware, monitorReducersEnhancer);
  const store = createStore(rootReducer, preloadedState, enhancers);
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(['./images/reducers', './videos/reducers', './filters/reducers', './tabs/reducers'], () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};
