import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisplayMovieList from "../../components/DisplayMovieList/DisplayMovieList";
import { useParams } from "react-router-dom";

const Home = () => {

    let { movie } = useParams();
    let { movieType } = useParams();

    let compStyle = {
        display: 'flex',
    }
    return (
        <>
            <Header />
            <div style={compStyle}>
                <Sidebar />
                <DisplayMovieList movie={movie} movieType={movieType} />
            </div>
        </>
    )
}

export default Home;