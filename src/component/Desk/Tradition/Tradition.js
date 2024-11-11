import React from 'react';
import Layout from '../Layout';
import '../../../css/allCss.css'
import Carousels from "../Carousels";

export default function Tradition() {
    return (
        <Layout>
            <main className="main">
                <section className="mainCarousel">
                    <Carousels/>
                </section>
                <section>
                    Tradition page입니다.
                </section>
            </main>
        </Layout>
    );
}