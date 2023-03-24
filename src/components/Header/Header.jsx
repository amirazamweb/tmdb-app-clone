import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../app-logo.png';
import style from './Header.module.css';

const Header = () => {

    let searchRef = useRef();

    let navigate = useNavigate();

    const getInputValue = () => {
        let inputVal = searchRef.current.value;
        if (inputVal != '') {
            navigate(`/search_movie/${inputVal}`);
        }

        searchRef.current.value = "";
    }

    return (
        <div className={style.header}>
            <div className={style.child1}><img src={logo} alt='logo image' /></div>
            <div className={style.child2}><h2>My Movie App</h2></div>
            <div className={style.child3}>
                <input type="text" placeholder='Search' ref={searchRef} />
                <button onClick={getInputValue}>Search</button>
            </div>
        </div>
    )
}

export default Header;