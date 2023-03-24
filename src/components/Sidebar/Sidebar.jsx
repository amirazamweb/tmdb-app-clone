import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Sidebar.module.css'


const Sidebar = () => {

    const [data, setData] = useState([]);
    let navigate = useNavigate();

    const fatchData = async () => {
        let data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=27903445d27724a894c2965a823316be&language=en-US');
        setData(data.data.genres);
    }

    const movietype = (sidebarData) => {
        navigate(`/movie_type/${sidebarData.name.toLowerCase()}_${sidebarData.id}`);
    }

    useEffect(() => {
        fatchData();
    })

    return (
        <div className={style.sidebar}>
            <h3>Genres</h3>
            {
                data.map((e, i) => {
                    return <p key={i} onClick={() => movietype(e)}>{e.name}</p>
                })
            }

        </div>
    )
}

export default Sidebar;