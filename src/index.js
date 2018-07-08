import './index.css';

import store, {history} from './store';

import App from './containers/app';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
