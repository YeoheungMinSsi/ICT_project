import React, { useState, useEffect } from 'react';
import SubGlassTitle from './SubGlassTitle';
import SubGlassList from './SubGlassList';
import '../../../../css/allCss.css'
import {useNavigate} from "react-router-dom";

export default function SubGlass({hoveredId}) {
    const [menuState, setMenuState] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setMenuState(hoveredId ? 'open' : 'close');
    }, [hoveredId]);

    const glassCategories = [
        { title: "잔의 종류",
            items: [] },
        { title: "잔의 재질",
            items: ["유리", "도자기", "금속류", "목재", "아크릴"] },
        { title: "술잔",
            items: [
                ["럼", "맥주", "보드카", "블랜디", "일본주"],
                ["와인", "위스키", "진", "전통주", "테킬라"]
            ]
        }
    ];

    const handleTitleClick = (title)  => {
        if (title === "잔의 종류") {
            navigate('/glass'); // Drink 메인 페이지로 이동
        } else {
            navigate(`/glass/${encodeURIComponent(title.toLowerCase())}`);
        }
    }

    return (
        <div className={`glass-submenu ${menuState}`}>
            {glassCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <SubGlassTitle
                        title={category.title}
                        onClick={() => handleTitleClick(category.title)}
                    >
                        {category.title === "술잔" ? (
                            <section className="sub-glass-list-section">
                                {category.items.map((subList, subIndex) => (
                                    <div key={subIndex}>
                                        <SubGlassList items={subList} />
                                    </div>
                                ))}
                            </section>
                        ) : (
                            category.items.length > 0 && <SubGlassList items={category.items} />
                        )}
                    </SubGlassTitle>
                </React.Fragment>
            ))}
        </div>
    );
}