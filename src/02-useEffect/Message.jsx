import { useEffect, useState } from "react"

export const Message = () => {
  const [cords, setCords] = useState({
    x: 0,
    y: 0
  })
  console.log(typeof cords)
  useEffect(() => {
/*     const onmousemove(x,y) => {
      setCords
    } */
    window.addEventListener("mousemove",({x,y})=>{
      setCords({x,y})
      console.log(cords);
    } )
    return () => {
      
    }
  }, [])
  
  return (
    <>
     <h1>el usuario ya existe</h1>
     { JSON.stringify(cords) }
    </>
  )
}
