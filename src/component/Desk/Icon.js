import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/allCss.css'

export default function Icon() {
    const navigate = useNavigate();

    const handleTitleClick = (title)  => {
        navigate(`/`);
    }

    return(
        <>
            <div>
                <img src={require('../../image/active버튼1.png')}
                     alt="home"
                     className="home-icon"
                     onClick={() => handleTitleClick('Home')}
                />
            </div>
        </>
    );
}