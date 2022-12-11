import React from 'react';
const Counter =({counter,decrement,increment,onDelete})=>{
    let countBadge, decrementButton;
    if(counter.value>0){
      countBadge = <span className="badge bg-primary rounded-pill m-2">{counter.value}</span>
      decrementButton = <button className="btn btn-sm btn-secondary m-2" onClick={()=>decrement(counter)}>-</button>
    }
    else{ 
      countBadge = <span className="badge bg-warning rounded-pill m-2">Zero</span>
      decrementButton = <button className="btn btn-sm btn-secondary m-2 opacity-50">-</button>
    }
    return (
      <>
        <div>
          { countBadge }
          <button className="btn btn-sm btn-secondary m-2" onClick={()=>increment(counter)}>+</button>
          { decrementButton }
          <button className="btn btn-danger btn-sm" onClick={()=>onDelete(counter)}>Delete</button>
        </div>
      </>
    );
}
 
export default Counter;