import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import App from './components/App'
import reducer from './reducers'
import './index.css'

const middlewares = [thunk]
if ('production' !== process.env.NODE_ENV) {
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
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
