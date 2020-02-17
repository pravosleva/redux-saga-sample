/*eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from './actions/dataFromServer';
import { putValue } from './actions/counter';

const Connected = () => {
  const dispatch = useDispatch();
  const data = useSelector(s => s.dataFromServer.data);
  const onClickForLoadData = () => dispatch(loadData());
  const count = useSelector(s => s.counter.value);
  const inc = () => dispatch(putValue(count + 1));

  return (
    <div>
      <button onClick={onClickForLoadData}>Load Data</button>
      <div>
        {JSON.stringify(data)}
      </div>
      <button onClick={inc}>Increment</button>
      <div>{count}</div>
    </div>
  )
}

export default Connected
