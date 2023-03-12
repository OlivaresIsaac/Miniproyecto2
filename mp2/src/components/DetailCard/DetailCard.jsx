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
            <h1 className={styles.detailTitle}>{movie.title}</h1>
            <img className={styles.detailPoster} src={`${BASE_IMG_URL}${movie.poster_path}`} alt="poster" />    
            <div className={styles.detailTextContainer}>
            <p className={styles.detailText}>Language:{movie.original_language}</p>
            <p className={styles.detailText}>Budget:${movie.budget}</p>
            <p className={styles.detailText}>Rating:{movie.popularity}</p>
            <p className={styles.detailText}>Release date:{movie.release_date}</p>
            <p className={styles.detailText}>Status:{movie.status}</p>
            </div>
            <div className={styles.detailCompanies}>
            <h3>Productors</h3>
            {
                movie.production_companies.map((c, key) => {
                    return(
                        <p className={styles.detailText}>{c.name}</p>
                    )
                })
            }
            </div>
            
            <p className={styles.detailOverview}>{movie.overview}</p>
            <div className={styles.detailGenres}>
            <h3>Genres: </h3>
            {
                movie.genres.map((genre, key) => {
                    return(
                        <p className={styles.detailText}>{genre.name}</p>
                    )
                })
            }
            </div>
        </div>
        )}
    }


export default DetailCard