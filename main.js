import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import Connected from './Connected'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Connected />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
