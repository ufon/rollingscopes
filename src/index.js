import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';


import App from './components/App';

// Add the reducer to your store on the `routing` key
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app')
)
