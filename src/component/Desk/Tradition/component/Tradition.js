import React, {useState, useEffect} from 'react';
import Layout from '../../Layout';
import '../css/TraditionAllCss.css';

import TraditionButton from "./TraditionButton";
import KoreaMap from './KoreaMap';
import TraditionText from './TraditionText';
import RegionText from './RegionText';


export default function Tradition() {
    const [isFixed, setIsFixed] = useState(false);
    const [activeButton, setActiveButton] = useState(null); // null로 초기화
    const [hoveredRegion, setHoveredRegion] = useState({ region: null });
    const [selectedRegion, setSelectedRegion] = useState(null);

    console.log(hoveredRegion);

    const regionList = ["경기도", "경상도", "전라도", "충청도", "강원도", "제주도", ];

    const handleButtonClick = (buttonType) => {
        setActiveButton(prevActive => prevActive === buttonType ? null : buttonType);
    };

    const handleRegionHover = (region) => {
        if (!selectedRegion) {
            setHoveredRegion({ region });
        }
    };

    const handleRegionClick = (region) => {
        if (selectedRegion === region) {
            setSelectedRegion(null);
        } else {
            setSelectedRegion(region);
            setHoveredRegion({ region });
        }
    };

    const renderContent = () => {
        switch(activeButton) {
            case 'tradition':
                return (
                    <TraditionText/>
                );
            case 'region':
                return (
                    <RegionText/>
                );
            default:
                return null;
        }
    };

    return (
        <div className="Tradition-wrapper">
            <Layout/>
            <div className="Tradition-page">  {/*  10/12레이어 정도  */}
                <div className="Tradition-l-side">
                    <div className={`Tradition-l-side-bar ${isFixed ? 'fixed' : ''}`}>
                        <h2>전통주/지역주</h2>
                        <hr/>
                        <ol>
                            {regionList.map((region, index) => {
                                return (
                                    <li key={index}>
                                        {region}  {/*대한민국 6도를 배열로 저장하고 배열을 가지고 오는 부분*/}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <section className="Tradition-main">
                    <div>
                        navigation 넣을 위치
                    </div>
                    <section className="Tradition-main-title">
                        <TraditionButton activeButton={activeButton}
                                         onButtonClick={handleButtonClick}
                        />
                        <div className="Tradition-main-title-text1">
                            {/*전통주와 아닌 것에대해서 설명하는 부분*/}
                            {renderContent()}
                        </div>
                    </section>
                    <section>
                        <div className="Tradition-main-map">
                            <KoreaMap
                                onRegionHover={handleRegionHover}
                                onRegionClick={handleRegionClick}
                                selectedRegion={selectedRegion}
                            />
                            <div className="Tradition-main-map-list">
                                dfa
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                        전통주와 지역주 top10
                        </div>
                    </section>
                </section>


                <div className="Tradition-r-side">
                    <div className="Tradition-r-side-bar">
                        {/*사이드 오른쪽 바 고객지원*/}
                    </div>
                </div>
            </div>
        </div>

    );
}