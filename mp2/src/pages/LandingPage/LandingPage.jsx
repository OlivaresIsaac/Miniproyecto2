import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service"

export function LandingPage(){
   
    return(
        <div className='fondo'>
            <h1>Soy landing</h1>
            <button onClick={ signInWithGoogle }> login</button>
        </div>
    )
}