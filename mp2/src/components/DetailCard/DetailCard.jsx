import React, { useEffect, useState } from 'react'
import { useMovies } from '../../hooks/useMovies';
import styles from "./DetailCard.module.css"

function DetailCard({movie}) {
    console.log(movie)
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

    if(Object.entries(movie).length !== 0){
        console.log(movie)
        return (
        <div className={styles.detailContainer}>
            <img className={styles.detailPoster} src={`${BASE_IMG_URL}${movie.poster_path}`} alt="poster" />    
            <h1 className={styles.detailTitle}>{movie.title}</h1>
    
            <p className={styles.detailText}>{movie.original_language}</p>
            <p className={styles.detailText}>{movie.budget}</p>
            <p className={styles.detailText}>{movie.popularity}</p>
            <p className={styles.detailText}>{movie.release_date}</p>
            <p className={styles.detailText}>{movie.status}</p>
            
            {
                movie.production_companies.map((c, key) => {
                    return(
                        <p className={styles.detailText}>{c.name}</p>
                    )
                })
            }

            <p className={styles.detailText}>{movie.overview}</p>
        </div>
        )}
    }


export default DetailCard