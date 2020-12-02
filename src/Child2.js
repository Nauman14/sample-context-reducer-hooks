import React,{useReducer} from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer,1);

    return(
        <div>
            <h2>This is Second Child using Counter Reducer</h2>
            <h3>Value of Reducer State is: {state}</h3>
            <button className="btn btn-primary" onClick={() =>dispatch('INCREMENT')}>Increment Value in Reducer</button>
        </div>
    )
}

export default Child2;