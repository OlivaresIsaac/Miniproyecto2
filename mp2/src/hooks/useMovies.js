import { async } from "@firebase/util";
import { useState } from "react";
import { fetchMovies } from "../utils/api";


export function useMovies(){
    const [movies, setMovies] = useState([]);
    const [isloading, setLoading] = useState(false);

    const getMovies = async() => {
        setLoading(true);
        const {data} = await fetchMovies();
        setMovies(data.results);
        setLoading(false);
    }

    return {
        movies,
        isloading,
        getMovies,
    };
};