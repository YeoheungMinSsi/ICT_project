import Button from 'react-bootstrap/Button';
import '../../css/test.css'
import React, { useState, useEffect } from 'react';
import '../../css/allCss.css'

export default function Test() {

    return (
        <>
            <div className="sub-menu-list1"> {/*술분류에대한 페이지*/}
                <div>
                    <Button variant="outline-info">술의 종류</Button>
                </div>
                <div>
                    <Button variant="outline-info">발효주</Button>
                    <ol>
                        <li>맥주</li>
                        <li>와인</li>
                        <li>청주</li>
                        <li>탁주</li>
                        <li>사케</li>
                    </ol>
                </div>
                <div>
                    <Button variant="outline-info">증류주</Button>
                    <ol>
                        <li>위스키</li>
                        <li>블랜디</li>
                        <li>럼</li>
                        <li>테킬라</li>
                        <li>증류식 소주</li>
                        <li>보드카</li>
                        <li>쇼츄</li>
                    </ol>
                </div>
                <div>
                    <Button variant="outline-info">혼성주</Button>
                    <ol>
                        <li>리큐르</li>
                    </ol>
                </div>
                <div>
                    <Button variant="outline-info">희석주</Button>
                    <ol>
                        <li>희석식 소주</li>
                    </ol>
                </div>
                <div>
                    <Button variant="outline-info">기타 주류</Button>
                    <ol>
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



// const [menuState, setMenuState] = useState('');
//
// const pageLink = [
//     {
//         id: "Drink",
//         pagelist: ["Coffee", "Tea", "Juice", "Smoothie"]
//     },
//     {
//         id: "Glass",
//         pagelist: ["Wine Glass", "Cocktail Glass", "Beer Mug", "Shot Glass"]
//     },
//     {
//         id: "Board",
//         pagelist: ["Notice", "FAQ", "Q&A", "Reviews"]
//     }
// ];
//
// const selectedLink = pageLink.find(link => link.id === hoveredId);
//
// useEffect(() => {
//     if (hoveredId) {
//         setMenuState('open');
//     } else {
//         setMenuState('close');
//     }
// }, [hoveredId]);
//
// if (!selectedLink) return null;
