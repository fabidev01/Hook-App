import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, decrement, increment, reset} = useCounter(10);

  return (
    <>
      <div className="title">
        <h1>Counter With Custom Hook</h1>
        <h3>{counter}</h3>
      </div>
     <button onClick={increment} className="btn btn-primary">+1</button>
     <button onClick={decrement} className="btn btn-primary">-1</button>
     <button onClick={reset} className="btn btn-warning">Reset</button>
    </>
  )
}
