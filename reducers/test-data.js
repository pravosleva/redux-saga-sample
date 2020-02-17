function data (state = { data: {} }, action) {
  switch (action.type) {
    case 'PUT_DATA':
      return { ...state, data: { ...action.payload } }
    default:
      return state
  }
}

export default data;
