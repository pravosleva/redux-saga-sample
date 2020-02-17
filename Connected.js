/*eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from './actions/dataFromServer';
import { inc, incIfOdd, dec, incAsync } from './actions/counter';

const Connected = () => {
  const dispatch = useDispatch();
  const data = useSelector(s => s.dataFromServer.data);
  const onClickForLoadData = () => dispatch(loadData());
  const count = useSelector(s => s.counter.value);
  const increment = () => dispatch(inc());
  const incrementIfOdd = () => dispatch(incIfOdd());
  const decrement = () => dispatch(dec());

  const onClickForIncrementAsync = () => dispatch(incAsync());

  return (
    <div>
      <button onClick={onClickForLoadData}>Load Data</button>
      <div>
        {JSON.stringify(data)}
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={onClickForIncrementAsync}>Increment Async after (1 sec)</button>
      <button onClick={incrementIfOdd}>Increment If Odd</button>
      <button onClick={decrement}>Decrement</button>
      <div>{count}</div>
    </div>
  )
}

export default Connected
