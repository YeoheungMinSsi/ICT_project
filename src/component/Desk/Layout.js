import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/allCss.css'

import Icon from "./Icon";
import Nav from "./Nav";

export default function Layout() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <header className="Layout">
            <Icon handleHomeClick={handleHomeClick}/>
            <Nav/>
        </header>
    );
}