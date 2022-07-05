import { useState,useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [user, setUser] = useState({
    nombre: "",
    email: ""
  })

  const {nombre, email} = user;

  const onInputChange=({target}) => {
    const {name, value} = target;
    setUser({
      ...user, 
      [name]: value
    })
  }
  
  useEffect(() => {
    // console.log('useEffect called')
  }, [])

  useEffect(() => {
    // console.log('form change')
  }, [user])

  useEffect(() => {
    // console.log('email change')
  }, [email])
  

  return (
    <>
      <h1>Simple Form</h1>
      <form className="title">
       <input 
          onChange={ e => onInputChange(e) }
          placeholder="nombre"
          className="form-control mt-3"
          name="nombre"
          type="text"/>
        <input 
          onChange={ onInputChange }
          placeholder="email"
          className="form-control mt-3"
          name="email"
          type="email"/>
        <input type="submit" className="btn btn-primary mt-3" />
      </form>

      {
        (nombre == 'andy') && <Message/>
      }
    </>
  )
}
