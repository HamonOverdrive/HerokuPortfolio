import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { store } from './_helpers/store';
import { BrowserRouter } from 'react-router-dom';




render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
