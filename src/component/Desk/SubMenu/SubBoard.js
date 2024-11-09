import React, { useState, useEffect } from 'react';
import '../../../css/allCss.css'

export default function SubBoard({hoveredId}) {
    const [menuState, setMenuState] = useState('');

    useEffect(() => {
        if (hoveredId) {
            setMenuState('open');
        } else {
            setMenuState('close');
        }
    }, [hoveredId]);


    return (
        <>
            <div className={`submenu ${menuState}`}> {/*술분류에대한 페이지*/}
                <div className="sub-board-title">
                    <p>술의 분류</p>
                    <ol className="sub-board-list">
                        <li>맥주</li>
                        <li>와인</li>
                        <li>청주</li>
                        <li>탁주</li>
                    </ol>
                </div>
                <div className="sub-board-title">
                    <p>발효주</p>
                    <ol className="sub-board-list">
                        <li>맥주</li>
                        <li>와인</li>
                        <li>청주</li>
                        <li>탁주</li>
                        <li>사케</li>
                    </ol>
                </div>
                <div className="sub-board-title">
                    <p>증류주</p>
                    <ol className="sub-board-list">
                        <li>위스키</li>
                        <li>블랜디</li>
                        <li>럼</li>
                        <li>테킬라</li>
                        <li>보드카</li>
                        <li>증류식 소주</li>
                        <li>쇼츄</li>
                    </ol>
                </div>
                <div className="sub-board-title">
                    <p>혼성주</p>
                    <ol className="sub-board-list">
                        <li>리큐르</li>
                    </ol>
                </div>
                <div className="sub-board-title">
                    <p>희석주</p>
                    <ol className="sub-board-list">
                        <li>희석식 소주</li>
                    </ol>
                </div>
                <div className="sub-board-title">
                    <p>기타 주류</p>
                    <ol className="sub-board-list">
                        <li>하이볼</li>
                        <li>강화주</li>
                        <li>칵테일</li>
                        <li>하이볼</li>
                    </ol>
                </div>

            </div>
        </>
    );
}
