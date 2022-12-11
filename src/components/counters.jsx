import React from 'react';
import Counter from './counter';
const Counters = ({counters, handleDecrement, handleDelete, handleIncrement, handleReset})=>{
  return (
    <>
      <button onClick={handleReset} className="btn btn-sm btn-primary m-2">Reset</button>
      {counters.map((counter, index)=><Counter 
        key={index} 
        counter={counter}
        increment = {handleIncrement} 
        decrement = {handleDecrement}
        onDelete = {handleDelete}
      />)}
    </>
  );
}
export default Counters;