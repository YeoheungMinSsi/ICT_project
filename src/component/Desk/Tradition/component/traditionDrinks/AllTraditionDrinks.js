import React from 'react';
import Layout from '../../../Layout';
import '../../css/TraditionAllCss.scss';
import TraditionButton from "../TraditionButton";
import KoreaMap from "../KoreaMap";

export default function AllTraditionDrinks() {


    return (
        <div className="all-tradi-drinks-wrapper">
            <Layout />
            <div className="all-tradi-drink-page">
                <section className="all-tradi-drinks-main">
                    <div className="all-tradi-drinks-nav-bar">
                        navigation 넣을 위치
                    </div>
                    <div>
                        목록넣기
                        <ol>
                            <li></li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>

    );
}
