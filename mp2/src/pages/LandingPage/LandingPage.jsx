import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])

useEffect(() => {
    console.log(currentMovies)
  }, [currentMovies])

console.log(currentMovies)
    // const {user} = useUserContext(); 
    // console.log(user)

    return(
        <div className="fondo main-column">
            <h1>Soy landing</h1>
            <Searcher movieSetter={setCurrentMovies}/> 
        </div>
    )
}