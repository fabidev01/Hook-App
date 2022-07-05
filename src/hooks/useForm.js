import { useState } from "react";

export const useForm = (user = {}) => {
  const [userState, setUserState] = useState(user);

  const onInputChange=({ target }) => {
    const { name, value } = target;
    setUserState({
      ...userState, 
      [name]: value
    })
  }

  const onInputReset=() => {
    setUserState(user);
  }
  return({
    userState,
    onInputChange,
    onInputReset
  })
}
