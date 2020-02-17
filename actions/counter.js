export const INCREMENT = 'INCREMENT';

export const putValue = val => {
  return {
    type: INCREMENT,
    payload: val
  }
}
