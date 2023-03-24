import { useState } from "react";
import axios from "axios";

const useFatchData = () => {
    const [movieList, setMovieList] = useState([]);
    const [showMsg, setShowMsg] = useState(false);

    const fatchDefaultData = async () => {

        let data = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=27903445d27724a894c2965a823316be&language=en-US&page=1');

        setMovieList(data.data.results);

        data.data.results.length ? setShowMsg(false) : setShowMsg(true);
    }

    const fatchSearchData = async (movie_name) => {

        if (movie_name) {
            let data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=27903445d27724a894c2965a823316be&query=${movie_name}&language=en-US&page=1&include_adult=false`);

            setMovieList(data.data.results);

            data.data.results.length ? setShowMsg(false) : setShowMsg(true);
        }
    }

    const fatchFilteredData = async (filter) => {

        if (filter) {
            let data = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=27903445d27724a894c2965a823316be&language=en-US&page=1');

            let movieData = data.data.results;

            let movie_type_id = filter.substring(filter.indexOf('_') + 1);

            let filteredMovieList = movieData.filter((movie) => {
                for (let x of movie.genre_ids) {
                    if (x == movie_type_id) {
                        return true;
                    }
                }
            })

            setMovieList(filteredMovieList);

            filteredMovieList.length ? setShowMsg(false) : setShowMsg(true);
        }

    }

    return [movieList, showMsg, fatchDefaultData, fatchSearchData, fatchFilteredData];
}

export default useFatchData;