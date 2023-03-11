import { async } from "@firebase/util";
import { useState } from "react";
import { fetchMovieId, fetchMovies, fetchUpcoming } from "../utils/api";


export function useMovies(){
    const [movies, setMovies] = useState([]);
    const [isloading, setLoading] = useState(false);

    const getMovies = async() => {
        setLoading(true);
        const {data} = await fetchMovies();
        setMovies(data.results);
        setLoading(false);
    }

    const getUpcoming = async() => {
        setLoading(true);
        const {data} = await fetchUpcoming();
        setMovies(data.results);
        setLoading(false);
    }

    const getMovieById = async(movie_id) => {
        setLoading(true);
        const{data} = await fetchMovieId(movie_id);
        setMovies(data);
        setLoading(false)
    }

    const getMovieByName = async(movie_name) => {
        setLoading(true);
        const{data} = await fetchMovieId(movie_name);
        setMovies(data.results);
        setLoading(false)
    }

    return {
        movies,
        isloading,
        getMovies,
        getMovieById,
        getMovieByName,
        getUpcoming,
    };
};