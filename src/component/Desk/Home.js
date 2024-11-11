import React from 'react';
import Layout from './Layout';
import Carousels from './Carousels';
import '../../css/allCss.css'

export default function Home() {
    return (
        <React.Fragment>
            <Layout />
            <div className="main">
                <div className="mainCarousel">
                    <Carousels/>
                </div>
            </div>
            <footer className="footer">
                기타 페이지
            </footer>
        </React.Fragment>
    );
}