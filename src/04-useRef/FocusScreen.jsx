import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <input 
        ref= { inputRef }
        className="form-control mt-3"
        type="text" />
      <input 
        className="form-control mt-3"
        type="text" />
      <input 
        className="form-control mt-3"
        type="text" />

      <button onClick={ onClick } className="btn btn-primary">Set name</button>
    </>
  )
}
