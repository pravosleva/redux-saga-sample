import { combineReducers } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 }
    case 'INCREMENT_IF_ODD':
      return { ...state, value: (state.value % 2 !== 0) ? state.value + 1 : state.value }
    case 'DECREMENT':
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
function dataReducer (state = { data: {} }, action) {
  switch (action.type) {
    case 'PUT_DATA':
      return { ...state, data: { ...action.payload } }
    default:
      return state
  }
}

export default combineReducers({
  dataFromServer: dataReducer,
  counter: counterReducer,
});
