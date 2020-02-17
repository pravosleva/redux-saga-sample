export const INCREMENT = 'INCREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export const inc = val => {
  return { type: INCREMENT }
}

export const incIfOdd = val => {
  return { type: INCREMENT_IF_ODD }
}

export const dec = val => {
  return { type: DECREMENT }
}

export const incAsync = () => {
  return { type: INCREMENT_ASYNC }
};
