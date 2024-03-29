import { useState } from "react"
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service"
import './RegisterPage.css'

export function RegisterPage(){

  const handleRegisterWithGoogle = async () => {
  await signInWithGoogle()
 }


  const [formData, setFormData] = useState({
      displayName: "",
      email: "",
      password: "",
  })

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setFormData({
        ...formData,
        [name]: value
    })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  const {email, password} = formData
  if (formData.password) {
    if(formData.confirmPassword === password)  {
    await registerWithEmailAndPassword(email, password, formData)
      
    } else {
      alert("Alerta, la constraseña no coincide en ambos campos, por favor intentelo de nuevo")
    }
  }
  


}


    return(
        <div className='fondo'>
          <form onSubmit={handleSubmit}>
            <h1 className='titulo'>Register</h1>
            <label>
              <input placeholder='Name' className='username' name="displayName" onChange={handleOnChange}></input>
            </label>
            {/* <label>
              <input placeholder='Username' className='username'></input>
            </label> */}
            <label>
              <input type={"email"} placeholder='Mail' className='username' name="email" onChange={handleOnChange}></input>
            </label>
            <label>
              <input type={'password'} placeholder='Password' className='password' name="password" onChange={handleOnChange} required minLength={6}></input>
            </label>
            <label>
              <input type={'password'} placeholder='Confirm Password' className='password' name="confirmPassword" onChange={handleOnChange} required minLength={6}></input>
            </label>

            <button className='button-login' type="submit">Register</button>
            <button className='button-google' onClick={handleRegisterWithGoogle}>With google</button>
          </form>
        </div>
    )
}