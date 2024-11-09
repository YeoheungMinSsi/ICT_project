import React, { useState, useEffect } from 'react';
import '../../../css/allCss.css'

export default function SubGlass({hoveredId}) {
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
                <div className="sub-glass-title">
                    <p>다양한 잔 종류</p>
                </div>
                <div className="sub-glass-title">
                    <p>잔의 재질</p>
                    <ol className="sub-glass-list">
                        <li>유리</li>
                        <li>도자기</li>
                        <li>금속류</li>
                        <li>목재</li>
                        <li>아크릴</li>
                    </ol>
                </div>
                <div className="sub-glass-title">
                    <p>와인잔</p>
                    <ol className="sub-glass-list">
                        <li>사케</li>
                        <li>전통주</li>
                    </ol>
                </div>
                <div className="sub-glass-title">
                    <p>금속류</p>
                    <ol className="sub-glass-list">
                        <li>리큐르</li>
                    </ol>
                </div>
                <div className="sub-glass-title">
                    <p>목재</p>
                    <ol className="sub-glass-list">
                        <li>희석식 소주</li>
                    </ol>
                </div>
                <div className="sub-glass-title">
                    <p>아크릴</p>
                    <ol className="sub-glass-list">
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
