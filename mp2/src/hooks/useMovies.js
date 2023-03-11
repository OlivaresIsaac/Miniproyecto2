import { async } from "@firebase/util";
import { useState } from "react";
import { fetchMovieId, fetchMovies, fetchUpcoming } from "../utils/api";


export function useMovies(){
    const [movies, setMovies] = useState([]);
    const [singleMovie, setSingleMovie] = useState({});
    const [isloading, setLoading] = useState(false);

    const getMovies = async(page) => {
        setLoading(true);
        const {data} = await fetchMovies(page);
        setMovies(data.results);
        setLoading(false);
    }

    const getUpcoming = async(page) => {
        setLoading(true);
        const {data} = await fetchUpcoming(page);
        setMovies(data.results);
        setLoading(false);
    }

    const getMovieById = async(movie_id) => {
        setLoading(true);
        const{data} = await fetchMovieId(movie_id);
        setSingleMovie(data);
        setLoading(false)
    }

    const getMovieByName = async(movie_name, page) => {
        setLoading(true);
        const{data} = await fetchMovieId(movie_name, page);
        setMovies(data.results);
        setLoading(false)
    }

    return {
        movies,
        singleMovie,
        isloading,
        getMovies,
        getMovieById,
        getMovieByName,
        getUpcoming,
    };
};