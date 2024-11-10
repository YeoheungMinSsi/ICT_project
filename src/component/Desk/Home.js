import React from 'react';
import Layout from './Layout';
import Carousels from './Carousels';
import '../../css/allCss.css'

export default function Home() {
    return (
        <Layout>
            <main className="main">
                <section className="mainCarousel">
                    <Carousels/>
                </section>
                <section>
                    메인 페이지
                </section>
            </main>
        </Layout>
    );
}