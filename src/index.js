import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/components/App';
import { configureStore } from './store';

const store = configureStore({
  images: {
    items: [],
    count: 0,
    offsets: 0,
    loaded: false,
    error: false,
    message: '',
  },
  videos: {
    items: [],
    count: 0,
    offsets: 0,
    loaded: false,
    error: false,
    message: '',
  },
  tabs: {
    items: ['Images', 'Videos'],
    selectedTab: 'Images',
  },
  filters: {
    items: {
      products: [],
      controlTypes: [],
      styles: [],
      rooms: [],
    },
    selectedProduct: '',
    selectedControlType: '',
    selectedStyle: '',
    selectedRoom: '',
  }
});

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app/components/App', renderApp);
}

renderApp();
