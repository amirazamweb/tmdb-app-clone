import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import style from './MovieDetails.module.css';
import { popupContext } from "../../App";
import { useNavigate } from "react-router-dom";

let defaultOverview = 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi obcaecati facere, natus quas, consequuntur nostrum quae, voluptate quia sed perspiciatis architecto voluptatum! Libero, sit facere.';

const MovieDetails = () => {

    let navigate = useNavigate();

    let { popupContent, setPopupContent } = useContext(popupContext);

    let titleRef = useRef();
    let priceRef = useRef();

    let compStyle = {
        display: popupContent.show ? 'block' : 'none'
    }

    const closePopup = () => {
        setPopupContent({ ...popupContent, show: false })
    }

    const moveToCheckout = () => {
        let title = titleRef.current.innerText;
        let price = priceRef.current.innerText;
        setPopupContent({ ...popupContent, show: false });
        navigate(`/checkout/${title}_${price}`);
    }

    return (
        <div style={compStyle}>
            <div className={style.main}>
                <div className={style.child1}><img src={`https://image.tmdb.org/t/p/w220_and_h330_face${popupContent.content.img ? popupContent.content.img : '/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg'}`} alt="movie-poster" /></div>
                <div className={style.child2}>
                    <h2 ref={titleRef}>{popupContent.content.title}</h2>
                    <p className={style.rating}><i className="fa-solid fa-star"></i> {popupContent.content.rating}/10</p>
                    <small>{popupContent.content.lang.toUpperCase()}</small>
                    <br />
                    <small>{Math.floor(Math.random() * 25 + 125)} minutes <i className="fa-solid fa-circle"></i> Action</small>
                    <p>{popupContent.content.overview ? popupContent.content.overview : defaultOverview}</p>

                    <p>&#8377; <span ref={priceRef}>{Math.floor(Math.random() * 50) + 250}</span></p>
                    <button onClick={moveToCheckout}>Book Tickets</button>
                </div>
                <div className={style.close}><i class="fa-solid fa-xmark" onClick={closePopup}></i></div>
            </div>
        </div>
    )
}

export default MovieDetails;