import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { decrementAction, incrementAction, resetAction } from '../store/counter/actions';
// import { Button } from './Button';

const Counter: React.FC = () => {
  const currentCount = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());
  return (
    <>
      <div>{currentCount.value}</div>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;