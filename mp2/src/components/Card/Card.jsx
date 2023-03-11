import React from 'react';
import styles from "./Card.module.css";

function Card({movie}) {
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>{movie.title}</h3>
            <img className={styles.cardPoster} src={`${BASE_IMG_URL}${movie.poster_path}`} alt="imagen" />
            <p className={styles.cardText}>popularity: {movie.popularity}</p>
            <p className={styles.cardText}>language: {movie.original_language}</p>
        </div>
    );
}

export default Card