import React, { createContext, useState } from 'react';

export let CounterContext = createContext();
// Create the context provider component
export function CounterContextProvider(props) {
  
  // Create the context

  // Define state and functions
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if ( count != 0){
      setCount(count - 1);
    } else {

    }
  };

  // Define the data to be provided to consumers
  const contextData = {
    count,
    increase,
    decrease,
  };

  return (
    <CounterContext.Provider value={contextData}>
      {props.children}
    </CounterContext.Provider>
  );
}
