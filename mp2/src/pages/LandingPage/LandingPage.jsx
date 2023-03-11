import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
import Card from "../../components/Card/Card";
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])

useEffect(() => {
    
  }, [currentMovies])

    // const {user} = useUserContext(); 
    // console.log(user)

    return(
        
        <div className="fondo main-column">
        
            <Searcher movieSetter={setCurrentMovies}/> 

           {
            currentMovies.map((movie, key) => {
                return ( 
                <Card movie={movie} key={key}/>
            )})
           }

           <button className="boton">New Movies</button>
           <button className="boton">Next Movies</button>

        </div>
     
    )
}