import './Searcher.css'
import { useState } from "react"
import { fetchMovieName} from "../../utils/api"
import { FaSearch } from 'react-icons/fa'


export function Searcher({movieSetter, setbusq, setMovieInput, actPage}){
    const [movieInputAux, setMovieInputAux] = useState("")

    const handleOnChange =  (event) => {
        const {value} = event.target
        setMovieInput(value)
        setMovieInputAux(value)
    }

    const submit = async () => {
        const query = await fetchMovieName(movieInputAux, actPage)
        setbusq(2)
        movieSetter(query.data.results)
    }

//     useEffect(() => {
//     console.log(movieInput)
//   }, [movieInput])

    return(
        <div className='input-container'> 
            <input placeholder='Find movies' onChange={handleOnChange} className="input"></input>

           <button onClick={submit}> <FaSearch className='icon' size={20}/></button> 
           
          
        </div>
    )
}

// class SearchIcon extends Component {
//     render(){
//         return  <FaCreativeCommonsNd />
//     }
// }