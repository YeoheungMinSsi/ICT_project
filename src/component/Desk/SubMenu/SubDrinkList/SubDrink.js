import React, { useState, useEffect } from 'react';
import '../../../../css/allCss.css'
import SubDrinkTitle from './SubDrinkTitle';
import SubDrinkList from './SubDrinkList';
import DrinkDivider from './DrinkDivider';
import '../../../../css/allCss.css'

export default function SubDrink({hoveredId}) {
    const [menuState, setMenuState] = useState('');

    useEffect(() => {
        setMenuState(hoveredId ? 'open' : 'close');
    }, [hoveredId]);

    const drinkCategories = [
        { title: "발효주", items: ["맥주", "와인", "청주", "탁주", "사케"] },
        { title: "증류주", items: ["위스키", "블랜디", "럼", "테킬라", "보드카", "증류식 소주", "쇼츄"] },
        { title: "혼성주", items: ["리큐르"] },
        { title: "희석주", items: ["희석식 소주"] },
        { title: "기타 주류", items: ["하이볼", "강화주", "칵테일", "하이볼"] }
    ];

    return (
        <div className={`drink-submenu ${menuState}`}>
            <SubDrinkTitle title="다양한 술 종류" />
            <DrinkDivider />
            {drinkCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <SubDrinkTitle title={category.title}>
                        <SubDrinkList items={category.items} />
                    </SubDrinkTitle>
                    {index < drinkCategories.length - 1 && <DrinkDivider />}
                </React.Fragment>
            ))}
        </div>
    );
}




// import React, { useState, useEffect } from 'react';
// import '../../../css/allCss.css'
//
// export default function SubDrink({hoveredId}) {
//     const [menuState, setMenuState] = useState('');
//
//     useEffect(() => {
//         if (hoveredId) {
//             setMenuState('open');
//         } else {
//             setMenuState('close');
//         }
//     }, [hoveredId]);
//
//
//     return (
//         <>
//             <div className={`drink-submenu ${menuState}`}> {/*술분류에대한 페이지*/}
//                 <div className="sub-drink-title">
//                     <p>다양한 술 종류</p>
//                 </div>
//                 <div className="divider-pre"><div className="divider"></div></div> {/*구분선 모양*/}
//                 <div className="sub-drink-title">
//                     <p>발효주</p>
//                     <ol className="sub-drink-list">
//                         <li>맥주</li>
//                         <li>와인</li>
//                         <li>청주</li>
//                         <li>탁주</li>
//                         <li>사케</li>
//                     </ol>
//                 </div>
//                 <div className="divider-pre"><div className="divider"></div></div> {/*구분선 모양*/}
//                 <div className="sub-drink-title">
//                     <p>증류주</p>
//                     <ol className="sub-drink-list">
//                         <li>위스키</li>
//                         <li>블랜디</li>
//                         <li>럼</li>
//                         <li>테킬라</li>
//                         <li>보드카</li>
//                         <li>증류식 소주</li>
//                         <li>쇼츄</li>
//                     </ol>
//                 </div>
//                 <div className="divider-pre"><div className="divider"></div></div> {/*구분선 모양*/}
//                 <div className="sub-drink-title">
//                     <p>혼성주</p>
//                     <ol className="sub-drink-list">
//                         <li>리큐르</li>
//                     </ol>
//                 </div>
//                 <div className="divider-pre"><div className="divider"></div></div> {/*구분선 모양*/}
//                 <div className="sub-drink-title">
//                     <p>희석주</p>
//                     <ol className="sub-drink-list">
//                         <li>희석식 소주</li>
//                     </ol>
//                 </div>
//                 <div className="divider-pre"><div className="divider"></div></div> {/*구분선 모양*/}
//                 <div className="sub-drink-title">
//                     <p>기타 주류</p>
//                     <ol className="sub-drink-list">
//                         <li>하이볼</li>
//                         <li>강화주</li>
//                         <li>칵테일</li>
//                         <li>하이볼</li>
//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// }
