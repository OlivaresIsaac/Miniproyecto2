import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
import Card from "../../components/Card/Card";
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])

useEffect(() => {
    console.log(currentMovies)
  }, [currentMovies])

    // const {user} = useUserContext(); 
  

    return(
        
        <div className="fondo main-column">
        
            <Searcher movieSetter={setCurrentMovies}/> 

            <div className="movie-flex">

           {
            currentMovies.map((movie, key) => {
                return (
                    <div className="card"> 
                        <Card movie={movie} key={movie.id}/>
                    </div>
            )})
           }
            </div>

           <button className="boton">New Movies</button>
           <button className="boton">Next Movies</button>

        </div>
     
    )
}