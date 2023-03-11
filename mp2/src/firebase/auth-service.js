import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo } from "@firebase/auth"
import { createUserProfile } from "./users-service"
import { User } from "../models/user"
import { auth, googleProvider } from "./config"


export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const { isNewUser } = getAdditionalUserInfo(result)
        if(isNewUser){
            const newUser = new User(result.user.uid, result.user.displayName, result.user.email)
            await createUserProfile(result.user.uid, newUser.toObject())
        }
      

    } catch (error) {
        console.log(error)
        // alert("Ha ocurrido un error inesperado, intentelo de nuevo")
return error
    }
}

export const registerWithEmailAndPassword = async (email, password, allData) => {
    try {
    
        const result = await createUserWithEmailAndPassword(auth, email, password)
      
        const newUser = new User(result.user.uid, allData.displayName, email)
            
        await createUserProfile(result.user.uid, newUser.toObject())

       
    
    } catch (error) {
        console.log(error)

        if (error.code === "auth/email-already-in-use") {
            alert("Alerta, usuario ya existe")
          } else {
            alert("Alerta, error al momento del registro, intente de nuevo")
          }
         
       

    }
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
       
    } catch (error) {
        console.log(error)
        if (error.code === "auth/wrong-password") {
            alert("Contraseña incorrecta");
        } else if (error.code === "auth/user-not-found") {
            alert("Usuario inexistente");
        } else {
            alert ("Ha ocurrido un error inesperado")
        }
        
        
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
        alert("Ha ocurrido un error inesperado, por favor intente de nuevo");
    }
}