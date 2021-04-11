import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const newHistory = createBrowserHistory();

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';
import requireAuth from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/resources" component={requireAuth(Resources)} />
    </BrowserRouter>
  </Provider>,

  document.querySelector('.container')
);
