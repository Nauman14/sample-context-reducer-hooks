import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let CounterValue = useContext(CounterContext);
    // console.log(CounterValue);
    return(
        <div>
            <h2>This is First Child using Counter Context</h2>
            <h3>The Context Value is {CounterValue[0]}</h3>
            <button className="btn btn-success" onClick={()=>{CounterValue[1](++CounterValue[0])}}>Increment Context</button>
        </div>
    )
}

export default Child;