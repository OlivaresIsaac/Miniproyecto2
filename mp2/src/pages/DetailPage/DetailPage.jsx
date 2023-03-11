import { useState, useEffect } from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import {useCurrentPathId} from "../../hooks/useCurrentPathId";
import { fetchMovieId } from "../../utils/api";

export  function DetailPage(){

    const [movie, setMovie] = useState({})

    const currentMovieId = useCurrentPathId()

    const getMovieQuery = async () => {
        const query = await fetchMovieId(currentMovieId)
        console.log(query)
        setMovie(query.data) 
    }
   
    useEffect(()=>{
        getMovieQuery()
    }, [])
    

        return(
            
            <div className="fondo">
           
                <DetailCard movie={movie}/> 
               {/* <h1> Soy detail</h1> */}
    
            </div>
         
        )
    }