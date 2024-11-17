import React, {useState} from 'react';
import Layout from '../../Layout';
import '../css/TraditionAllCss.scss';

import TraditionButton from "./TraditionButton";
import KoreaMap from './KoreaMap';
import TraditionText from './TextPage/TraditionText';
import TraditionThree from './TextPage/TraditionThree';
import Gyeonggi from './TextPage/Gyeonggi';
import Gyeongsang from './TextPage/Gyeongsang';
import Jeolla from './TextPage/Jeolla';
import Chungcheong from './TextPage/Chungcheong';
import Gangwon from './TextPage/Gangwon';
import Jeju from './TextPage/Jeju';


export default function Tradition() {
    const [activeButton, setActiveButton] = useState(null); // null로 초기화
    const [activePage, setActivePage] = useState(null); // null로 초기화
    const [hoveredRegion, setHoveredRegion] = useState({ region: null });
    const [selectedRegion, setSelectedRegion] = useState(null);

    console.log(hoveredRegion);


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

    // 버튼을 눌렀을때 나오는 화면을 render하는 변수
    const renderContent = () => {
        switch(activeButton) {
            case 'tradition': return (<TraditionText/>);
            case 'region': return (<TraditionThree/>);
            default:
                return null;
        }
    };
    // 화면에 나오는 맵에서 맵을 클릭했을때 나오는 지명에 대해서 랜더링
    const mapRanderContent = () => {
        switch(hoveredRegion.region) {
            case 'gyeonggi': return (<Gyeonggi />);
            case 'gyeongsang': return (<Gyeongsang/>);
            case 'jeolla': return (<Jeolla/>);
            case 'chungcheong': return (<Chungcheong/>);
            case 'gangwon': return (<Gangwon/>);
            case 'jeju': return (<Jeju/>);
            default:
                return null;
        }
    }


    return (
        <div className="Tradition-wrapper">
            <Layout/>
            <div className="Tradition-page">  {/*  10/12레이어 정도  */}
                <div className="Tradition-l-side">
                    {/*<div className={`Tradition-l-side-bar ${isFixed ? 'fixed' : ''}`}>*/}
                    {/*    <h2>전통주/지역주</h2>*/}
                    {/*    <hr/>*/}
                    {/*    <ol>*/}
                    {/*        {regionList.map((region, index) => {*/}
                    {/*            return (*/}
                    {/*                <li key={index}>*/}
                    {/*                    {region}  /!*대한민국 6도를 배열로 저장하고 배열을 가지고 오는 부분*!/*/}
                    {/*                </li>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </ol>*/}
                    {/*</div>*/}
                </div>
                <section className="Tradition-main">
                    <div className="Tradition-main-title-bar">
                        navigation 넣을 위치
                    </div>
                    <section className="Tradition-main-title">
                        <TraditionButton activeButton={activeButton}
                                         onButtonClick={handleButtonClick}
                        />
                        <div className="Tradition-main-title-text">
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
                                {mapRanderContent()}
                            </div>
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