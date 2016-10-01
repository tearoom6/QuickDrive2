import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import env from './env.js'
import App from './components/App'
import reducer from './reducers'
import './index.css'

const middlewares = [thunk]
if (env == 'development') {
  const logger = createLogger({
    level: 'info',
    duration: true,
    diff: true
  })
	middlewares.push(logger)
}
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
