import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../../../css/allCss.css'

import SubTraditionTitle from './SubTraditionTitle';
// import SubTraditionList from './SubTraditionList';
import TraditionDivider from './TraditionDivider';

export default function SubTradition({hoveredId}) {
    const [menuState, setMenuState] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        setMenuState(hoveredId ? 'open' : 'close');
    }, [hoveredId]);

    const handleTitleClick = (title)  => {
        if (title === "전통주/지역주") {
            navigate('/tradition'); // Drink 메인 페이지로 이동
        } else {
            navigate(`/tradition/${encodeURIComponent(title.toLowerCase())}`);
        }
    }

    const drinkCategories = [
        { title: "경기도"}, { title: "경상도"}, { title: "전라도"},{ title: "충청도"},
        { title: "강원도"}, { title: "제주도"}
    ];

    return (
        <div className={`tradition-submenu ${menuState}`}>
            <SubTraditionTitle title="전통주/지역주" onClick={() => handleTitleClick("전통주/지역주")} />
            <TraditionDivider />
            {drinkCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <SubTraditionTitle
                        title={category.title}
                        onClick={() => handleTitleClick(category.title)}
                    >
                    </SubTraditionTitle>
                    {index < drinkCategories.length - 1 && <TraditionDivider />}
                </React.Fragment>
            ))}
        </div>
    );
}


//     return (
//         <div className={`drink-submenu ${menuState}`}>
//             <SubDrinkTitle title="다양한 술 종류" />
//             <DrinkDivider />
//             {drinkCategories.map((category, index) => (
//                 <React.Fragment key={index}>
//                     <SubDrinkTitle
//                          title={category.title}
//                          >
//                         <SubDrinkList items={category.items} />
//                     </SubDrinkTitle>
//                     {index < drinkCategories.length - 1 && <DrinkDivider />}
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }
