import {Searcher}  from "../../components/Searcher/Searcher";
import { useState, useEffect } from "react"
import './LandingPage.css'
import Card from "../../components/Card/Card";
import { fetchUpcoming} from "../../utils/api"
import { fetchMovies} from "../../utils/api"
// import { useUserContext } from "../../contexts/UserContext";

export function LandingPage(){

const [currentMovies, setCurrentMovies] = useState([])
const [actpag, setpage] = useState(1)
const [busqact, setbusq] = useState(0)
// 0 es nada, 1 es new, 2 es por nombre, 3 proximas
useEffect(() => {
    console.log(currentMovies)
  }, [currentMovies])

    // const {user} = useUserContext(); 
    // console.log(user)
    const Next = async () => {
        setpage(actpag + 1)
        if (busqact === 1){
            submitNew()
        }
        if (busqact === 3){
            submitNext()
        }
        
    }
    const Back = async () => {
        if (actpag != 1){
            setpage(actpag - 1)
        }
        if (busqact === 1){
            submitNew()
        }
        if (busqact === 3){
            submitNext()
        }
        
    }
    const submitNext = async () => {
        const query = await fetchUpcoming(actpag)
        setCurrentMovies(query.data.results)
        setbusq(3)
    }
    const submitNew = async () => {
        console.log("hola")
        const query = await fetchMovies(actpag)
        setCurrentMovies(query.data.results)
        setbusq(1)
    }
    return(
        
        <div className="fondo main-column">
        
        <Searcher movieSetter={setCurrentMovies}/> 
        <button className="boton" onClick={submitNew}>New Movies</button>

        <button className="boton" onClick={submitNext}>Next Movies</button>
        <div className="paginas">
            <button className="boton" onClick={Back}>ant</button>
            <a>{actpag}</a>
            <button className="boton" onClick={Next}>sig</button>
        </div>


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