import style from './Card.module.css';
import { useContext, useState } from 'react';
import { popupContext } from '../../../App';

const Card = ({ img, title, lang, rating, overview }) => {

    let movieCardDetail = { img, title, lang, rating, overview };

    let { popupContent, setPopupContent } = useContext(popupContext);

    const movieCardClickHandler = (e) => {
        setPopupContent({ ...popupContent, show: true, content: movieCardDetail });
    }

    return (
        <div className={style.card} onClick={movieCardClickHandler}>
            <div className={style.child1}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${img ? img : '/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg'}`} alt="movie-name" />
            </div>
            <div className={style.child2}>
                <p className={style.movieName}>{title}</p>
                <small className={style.lang}><span>{lang.toUpperCase()}</span> <span className={style.rating}>{rating}</span></small>
            </div>

        </div>
    )
}

export default Card;