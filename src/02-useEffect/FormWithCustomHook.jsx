import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { userState, onInputChange, onInputReset } = useForm({
    nombre: '',
    email: '',
    contraseña: ''
  });
  
  const { nombre, email, contraseña } = userState;

  return (
    <>
      <h1>SIMPLE FORM</h1>
      <div className="title" aria-label="form">
       <input 
          onChange={ e => onInputChange(e) }
          placeholder="nombre"
          className="form-control mt-3"
          name="nombre"
          type="text"
          value={ nombre }/>
        <input 
          onChange={ onInputChange }
          placeholder="email"
          className="form-control mt-3"
          name="email"
          type="email"
          value={ email }/>
        <input 
          onChange={ onInputChange }
          placeholder="password"
          className="form-control mt-3"
          name="contraseña"
          type="password"
          value={ contraseña }/>
      </div>
        <button 
          onClick={ onInputReset }
          className="btn btn-danger">Reset</button>

    </>
  )
}