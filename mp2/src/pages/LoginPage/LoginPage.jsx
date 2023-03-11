import './LoginPage.css'
import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service"
import { useState } from "react"


export function LoginPage(){

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle()
 }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }


 const handleOnSubmit = async (event) => {
  event.preventDefault()
  const {email, password} = formData

  await loginWithEmailAndPassword(email, password)
 }

    return(
        <div className='fondo'>
          <form onSubmit={handleOnSubmit} className="form">
            <h1 className='titulo'>Login</h1>
            <label>
              <input placeholder='Email' className='username' name='email' onChange={handleOnChange}></input>
            </label>
            <label>
              <input type={'password'} placeholder='Password' className='password' name='password' onChange={handleOnChange}></input>
            </label>

            <button className='button-login' type='submit'>Login</button>
            <button className='button-google' onClick={handleLoginWithGoogle}>With google</button>
          </form>
        </div>
    )
}