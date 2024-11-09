import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/allCss.css'

import Nav from "./Nav";
import Icon from "./Icon";
import Carousels from './Carousels';

export default function Home() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return(
        <div className="Home">
            <Icon handleHomeClick={handleHomeClick}/>
            <Nav/>
            {/*목차, 로그인,회원가입 -> 프로필 -> 팝오버로 하는 것으로*/}
            <main className="main">
                <section className="mainCarousel">
                    <Carousels/>
                </section>
                <section>
                    메인 페이지
                </section>
            </main>
            <footer className="footer">
                기타 페이지
            </footer>
        </div>
    );
}