import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './Checkout.module.css';
import * as yup from 'yup';
import bookedLogo from '../../popcorn.png'

const Checkout = () => {

    let params = useParams();
    let movieName = params.id.substring(0, params.id.lastIndexOf("_"));
    let moviePrice = params.id.substring(params.id.lastIndexOf("_") + 1);
    let [count, setCount] = useState(1);
    let navigate = useNavigate();
    let [display, setDisplay] = useState({ displayBg: 'none', displayPopup: 'none' });

    let schema = yup.object().shape({
        fname: yup.string().required(),
        lname: yup.string().required(),
        email: yup.string().required(),
        cardName: yup.string().required(),
        cardNumber: yup.string().required(),
        exp: yup.string().required(),
        cvv: yup.string().required()
    })

    let [cardDetails, setCardDetails] = useState({});
    let [show, setShow] = useState(false);

    let getCardDetails = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    }

    let formHandler = (e) => {
        e.preventDefault();
        schema.validate(cardDetails)
            .then((e) => {
                setShow(false);
                setDisplay({ displayBg: 'block', displayPopup: 'block' });
            })
            .catch((e) => {
                setShow(true);
            })
    }

    const countHandler = (e) => {
        if (e.target.value) {
            setCount(e.target.value);
        }
        else {
            setCount(1);
        }
    }

    const closePopup = () => {
        setDisplay({ displayBg: 'none', displayPopup: 'none' });
        navigate('/')
    }

    return (
        <div className={style.main}>
            <div className={style.child1}>
                <h3>Summary</h3>
                <h4>{movieName}</h4>
                <p>Classic Ticket <span> &#8377; {moviePrice}</span></p>
                <p>Number of tickets: <input type="number" name="" id="" defaultValue={count} min='1' onInput={countHandler} /></p>
                <p>Convenience Fee(1.75%) <span> &#8377; {(moviePrice * count * 0.0175).toFixed(2)}</span></p>
                <br />
                <p>Sub total <span>&#8377; {Number(moviePrice * count) + Number((moviePrice * count * 0.0175).toFixed(2))}</span></p>
            </div>
            <div className={style.child2}>
                <h2>Checkout</h2>
                <form action="" onSubmit={formHandler}>
                    <h3>Payment</h3>
                    First name <input type="text" name="fname" id="" onChange={getCardDetails} />&nbsp;
                    Last name <input type="text" name="lname" id="" onChange={getCardDetails} />
                    <br />
                    <label htmlFor="email">Email </label>
                    <br />
                    <input type="email" name="email" id="email" placeholder='you@example.com' onChange={getCardDetails} />
                    <br />
                    <input type="radio" name="card" id="" value="credit card" defaultChecked /> Credit Card &nbsp;
                    <input type="radio" name="card" id="" value="debit card" /> Debit Card &nbsp;
                    <input type="radio" name="card" id="" value="upi" /> upi &nbsp;
                    <br />
                    <label htmlFor="card-name">Name on card</label>
                    <br />
                    <input type="text" name="cardName" id="card-name" onChange={getCardDetails} />
                    <br />
                    <label htmlFor="credit-card-number">Credit card number</label>
                    <br />
                    <input type="number" name="cardNumber" id="credit-card-number" onChange={getCardDetails} />
                    <br />
                    <label htmlFor="expiration">Expiration</label>
                    <br />
                    <input type="date" name="exp" id="expiration" onChange={getCardDetails} />
                    <br />
                    <label htmlFor="cvv">CVV</label>
                    <br />
                    <input type="number" name="cvv" id="cvv" onChange={getCardDetails} />
                    <br />
                    <input type="submit" value="Proceed to pay" id='submit' />
                </form>
                {show && <small style={{ color: 'red' }}>All field are required</small>}
            </div>

            {/* back button */}

            <button className={style.backBtn} onClick={() => navigate("/movie_type/action_28")}>Back</button>

            <div className={style.bg} style={{ display: display.displayBg }}></div>

            <div className={style.bookedLogo} style={{ display: display.displayPopup }}><img src={bookedLogo} alt="booked-logo" />
                <div className={style.close} onClick={closePopup}><i class="fa-solid fa-xmark"></i></div>
            </div>
        </div>
    )
}

export default Checkout;