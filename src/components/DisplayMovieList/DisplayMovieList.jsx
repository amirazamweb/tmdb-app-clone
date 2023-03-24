import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import style from './DisplayMovieList.module.css';
import useFatchData from "./useFatchData";

const DisplayMovieList = ({ movie, movieType }) => {
    let title;
    if (movie) {
        title = movie[0].toUpperCase() + movie.substring(1);
    }
    else if (movieType) {
        let str = movieType.substring(0, movieType.indexOf('_'));
        title = str[0].toUpperCase() + str.substring(1);
    }

    let [movieList, showMsg, fatchDefaultData, fatchSearchData, fatchFilteredData] = useFatchData();

    useEffect(() => {
        fatchDefaultData();
    }, [])

    useEffect(() => {
        fatchSearchData(movie);
    }, [movie])

    useEffect(() => {
        fatchFilteredData(movieType);
    }, [movieType])

    return (
        <div className={style.main}>
            <h2>{title ? title : 'Now Playing'}</h2>
            <div className={style.cardContainer}>
                {
                    movieList.map((movie, i) => {
                        return <Card key={i}
                            img={movie.backdrop_path}
                            title={movie.title}
                            lang={movie.original_language}
                            rating={movie.vote_average}
                            overview={movie.overview}
                        />
                    })
                }
            </div>
            {showMsg && <p style={{ textAlign: 'center' }}>{title} movie list not found!</p>}
        </div>
    )
}

export default DisplayMovieList;