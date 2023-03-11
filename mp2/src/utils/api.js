import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "?api_key=5f5cce4d218b6d12aa75b581140d7419";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export async function fetchMovies(){
    return axiosInstance.get(`/discover/movie${KEY}`);
}

export async function fetchMovieId(movie_id){
    return axiosInstance.get(`/movie/${movie_id}${KEY}`);
}

export async function fetchUpcoming(){
    return axiosInstance.get(`/movie/upcoming${KEY}`);
}

export async function fetchMovieName(movie_name){
    return axiosInstance.get(`/search/movie${KEY}&query=${movie_name}`);
}