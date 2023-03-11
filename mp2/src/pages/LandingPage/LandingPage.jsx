import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
import Card from "../../components/Card/Card";
import { fetchUpcoming} from "../../utils/api"
import { fetchMovies} from "../../utils/api"
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])

useEffect(() => {
    console.log(currentMovies)
  }, [currentMovies])

    // const {user} = useUserContext(); 
    // console.log(user)
    const submitNext = async () => {
        const query = await fetchUpcoming(1)
        setCurrentMovies(query.data.results)
    }
    const submitNew = async () => {
        const query = await fetchMovies(1)
        setCurrentMovies(query.data.results)
    }
    return(
        
        <div className="fondo main-column">
        
            <Searcher movieSetter={setCurrentMovies}/> 
            <button className="boton" onClick={submitNew}>New Movies</button>

           <button className="boton" onClick={submitNext}>Next Movies</button>

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

           

        </div>
     
    )
}