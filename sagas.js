import {
  put,
  takeEvery, // Позволяет производить отслеживание (тип события, выполняемый воркер)
  // all,
  call,
} from 'redux-saga/effects'
import { LOAD_DATA, putData } from './actions';

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

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     watchIncrementAsync(),
//     watchLoadData(),
//   ])
// }
