import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../../../css/allCss.css'

import SubDrinkTitle from './SubDrinkTitle';
import SubDrinkList from './SubDrinkList';
import DrinkDivider from './DrinkDivider';

export default function SubDrink({hoveredId}) {
    const [menuState, setMenuState] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        setMenuState(hoveredId ? 'open' : 'close');
    }, [hoveredId]);

    const handleTitleClick = (title)  => {
        if (title === "다양한 술 종류") {
            navigate('/drink'); // Drink 메인 페이지로 이동
        } else {
            navigate(`/drink/${encodeURIComponent(title.toLowerCase())}`);
        }
    }

    const drinkCategories = [
        { title: "발효주", items: ["맥주", "와인", "청주", "탁주", "사케"] },
        { title: "증류주", items: ["위스키", "블랜디", "럼", "테킬라", "보드카", "증류식 소주", "쇼츄"] },
        { title: "혼성주", items: ["리큐르"] },
        { title: "희석주", items: ["희석식 소주"] },
        { title: "기타 주류", items: ["하이볼", "강화주", "칵테일", "하이볼"] }
    ];

    return (
        <div className={`drink-submenu ${menuState}`}>
            <SubDrinkTitle title="다양한 술 종류" onClick={() => handleTitleClick("다양한 술 종류")} />
            <DrinkDivider />
            {drinkCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <SubDrinkTitle
                        title={category.title}
                        onClick={() => handleTitleClick(category.title)}
                    >
                        <SubDrinkList items={category.items} />
                    </SubDrinkTitle>
                    {index < drinkCategories.length - 1 && <DrinkDivider />}
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
