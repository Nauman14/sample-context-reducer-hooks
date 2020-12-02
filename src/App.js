import React,{useState} from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';

function App() {
  // let [count,setCount] = useState(50);
  let countState =  useState(1);
  return (
    <CounterContext.Provider value={countState}>
        <div className="col-lg-12">
          <Parent />
        </div>
    </CounterContext.Provider>
  );
}

export default App;
