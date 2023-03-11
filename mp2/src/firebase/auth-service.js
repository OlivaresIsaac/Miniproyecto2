import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo } from "@firebase/auth"
import { createUserProfile } from "./users-service"
import { User } from "../models/user"
import { auth, googleProvider } from "./config"


export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const { isNewUser } = getAdditionalUserInfo(result)

        //TODO pasar data con todo lo necesario, buscar la forma de pasar el boolean de isDoctor
        if(isNewUser){
            const newUser = new User(result.user.uid, result.user.displayName, result.user.email)
            await createUserProfile(result.user.uid, newUser.toObject())
        }

    } catch (error) {
        console.log(error)
    }
}

export const registerWithEmailAndPassword = async (email, password, allData) => {
    try {
    
        const result = await createUserWithEmailAndPassword(auth, email, password)
      
        const newUser = new User(result.user.uid, allData.displayName, email, allData.isDoctor, allData.tlf, allData.preferedLanguage)
            
        await createUserProfile(result.user.uid, newUser.toObject())

    } catch (error) {
        console.log(error)

    }
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}