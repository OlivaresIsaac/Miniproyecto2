import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
import Card from "../../components/Card/Card";
import { fetchUpcoming} from "../../utils/api"
import { fetchMovies, fetchMovieName} from "../../utils/api"
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])
const [actpag, setpage] = useState(1)
const [busqact, setbusq] = useState(0)
const [movieInput, setMovieInput] = useState("")

    useEffect(()=>{
        submitNext()
    }, [])
    const Next = async () => {
        setpage(actpag + 1)
        if (busqact === 1){
            submitNew()
        }  else if (busqact === 2){
            submitByName() 
        } else if (busqact === 3){
            submitNext()
        }

        
    }
    const Back = async () => {
        if (actpag !== 1){
            setpage(actpag - 1)
        }
        if (busqact === 1){
            submitNew()
        } else if (busqact === 2){
            submitByName()
        } else if (busqact === 3){
            submitNext()
        }
          
        
   
    }
    const submitNext = async () => {
        const query = await fetchUpcoming(actpag)
        setCurrentMovies(query.data.results)
        setbusq(3)
    }
    const submitNew = async () => {
        const query = await fetchMovies(actpag)
        setCurrentMovies(query.data.results)
        setbusq(1)
    }

    const submitByName = async () =>  {
        console.log(movieInput)
        const query = await fetchMovieName(movieInput, actpag)
        setCurrentMovies(query.data.results)
        setbusq(2)
    }  

    return(
        
        <div className="fondo main-column">
            <div className="masarriba">
                <button className="botontop" onClick={submitNew}>New Movies</button>
                <Searcher movieSetter={setCurrentMovies} setbusq={setbusq} setMovieInput={setMovieInput} actPage={actpag} /> 
                

                <button className="botontop" onClick={submitNext}>Upcoming Movies</button>
            </div>
            <div className="paginas">
                <button className="boton" onClick={Back}>Prev</button>
                <a>{actpag}</a>
                <button className="boton" onClick={Next}>Next</button>
            </div>


            <div className="movie-flex">
            {currentMovies.length === 0 &&(
                <p className="error">404 NOT FOUND</p>
            )}
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