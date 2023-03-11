import './Searcher.css'
import { useState, useEffect } from "react"
import { fetchMovieName} from "../../utils/api"

export function Searcher({movieSetter}){
    const [movieInput, setMovieInput] = useState("")

    const handleOnChange = async (event) => {
        const {value} = event.target
        setMovieInput(value)
        const query = await fetchMovieName(value)
        movieSetter(query.data.results)
    }

    useEffect(() => {
    console.log(movieInput)
  }, [movieInput])

    return(
        <div className='input-container'> 

            <form>
            <label> 
            <   input placeholder='Find movies' onChange={handleOnChange}></input>
            </label>
            </form>
            <h1> Soy searchers</h1>
        </div>
    )
}