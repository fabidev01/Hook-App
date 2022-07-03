import { useState } from "react";

export const useCounter = ( Value=0 )=>{
  const [counter, setCounter] = useState(Value);
  const increment = ()=> setCounter(counter+1);
  const decrement = ()=> setCounter(counter-1);(counter+1);
  const reset = ()=> setCounter(Value);
  return{
    counter,
    increment,
    decrement,
    reset
  }
};