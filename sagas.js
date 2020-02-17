import {
  put,
  takeEvery, // Позволяет производить отслеживание (тип события, выполняемый воркер)
  all,
  call,
} from 'redux-saga/effects'
import { LOAD_DATA, putData } from './actions/dataFromServer';
import { INCREMENT, INCREMENT_ASYNC, inc } from './actions/counter';


// -- INCREMENT ASYNC
const delay = ms => new Promise(res => setTimeout(res, ms))
function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: INCREMENT })
}
function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
// --

// -- LOAD DATA:
function fetchData () {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json());
}
function* loadDataWorker() {
  const data = yield call(fetchData);

  yield put(putData(data));
}
export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, loadDataWorker)
}
// --

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchLoadData(),
  ])
}
