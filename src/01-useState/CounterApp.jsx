import { useState } from "react"

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 0,   
    counter2: 0,
    counter3: 0
  });
  const {counter1, counter2, counter3} = state;
  return (
    <div className='title'>
      <h1>CounterApp</h1>
      <h3>Counter1: { counter1 }</h3>
      <h3>Counter2: { counter2 }</h3>
      <h3>Counter3: { counter3 }</h3>
      <button 
        onClick={ ()=> setCounter({...state, counter1: counter1 + 1})}
        className="btn btn-light">+1</button>
    </div>
  )
}
