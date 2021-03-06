import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import rootReducer from './reducers'
import rootSaga from './sagas'

// Create saga middlw:
const sagaMiddleware = createSagaMiddleware()

// Mount it on the store:
export default createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

// Rur the sagas:
sagaMiddleware.run(rootSaga)
