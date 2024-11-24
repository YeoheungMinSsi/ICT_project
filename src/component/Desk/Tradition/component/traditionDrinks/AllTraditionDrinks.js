import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //돋보기 모양을 사용하기위한 라이브러리
import { faSearch } from '@fortawesome/free-solid-svg-icons'; //돋보기 모양을 사용하기위한 함수
import Layout from '../../../Layout';
import '../../css/TraditionAllCss.scss';

import AllTraditionMain from './AllTraditionMain';

export default function AllTraditionDrinks() {


    return (
        <div className="all-tradi-drinks-wrapper">
            <Layout />
            <div className="all-tradi-drink-page">
                <section className="all-tradi-drinks-main">
                    <div className="all-tradi-drinks-nav-bar">  {/*현재 페이지 nav를 넣는 위치*/}
                        navigation 넣을 위치
                    </div>
                    <div className="all-tradi-drinks-main-content">
                        <div className="all-tradi-drinks-search-box">
                            <input type="text"
                                   placeholder="검색하실 전통주를 입력하세요"
                                   className="all-tradi-drinks-search-input"
                            />
                            <button className="all-tradi-drinks-search-btn">
                                <FontAwesomeIcon icon={faSearch} /> {/* 돋보기 모양 */}
                            </button>
                        </div>
                        <AllTraditionMain/>
                    </div>
                </section>
            </div>
        </div>

    );
}
