import { useContext } from "react";
import { popupContext } from "../../App";


const AppBg = () => {

    let { popupContent, setPopupContent } = useContext(popupContext);

    let compStyle = {
        position: 'absolute',
        backgroundColor: 'black',
        top: '0',
        left: '0',
        width: '100%',
        height: '2400px',
        zIndex: '1',
        opacity: '0.7',
        display: popupContent.show ? 'block' : 'none'
    }

    return (
        <div style={compStyle}></div>
    )
}

export default AppBg;