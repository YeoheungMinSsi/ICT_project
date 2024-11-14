import React from 'react';
import Layout from './Layout';
import Carousels from './Carousels';
import Main from './Main';
import '../../css/allCss.css'

export default function Home() {
    return (
        <>
            <Layout />
            <Carousels/>
            <Main/>
            <footer className="footer">
                기타 페이지
            </footer>
        </>
    );
}