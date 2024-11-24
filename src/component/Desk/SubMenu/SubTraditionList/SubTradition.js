import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { traditionCategories } from './traditionCategories';
import './SubTraditionMenu.scss'

import SubTraditionTitle from './SubTraditionTitle';
import SubTraditionList from './SubTraditionList';

export default function SubTradition({hoveredId}) {
    const [menuState, setMenuState] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setMenuState(hoveredId ? 'open' : 'close');
    }, [hoveredId]);

    const handleTitleClick = (category) => {
        if (category.title === "전통주") {
            navigate('/tradition');
        } else {
            // 카테고리 제목 클릭 시 특정 동작을 원하지 않는다면 아무 것도 하지 않습니다.
            // 또는 필요에 따라 다른 동작을 추가할 수 있습니다.
        }
    }

    const handleSubItemClick = (category, subItem, event) => {
        // 이벤트 전파를 막습니다
        event.preventDefault();
        event.stopPropagation();
        // 즉시 해당 경로로 이동합니다
        navigate(`/tradition/${subItem.path}`);
    }
    return (
        <div className={`tradition-submenu ${menuState}`}>
            {traditionCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <SubTraditionTitle
                        title={category.title}
                        onClick={() => handleTitleClick(category)}
                    >
                        {category.subMenu && (
                            <SubTraditionList
                                items={category.subMenu}
                                onItemClick={(subItem, event) => handleSubItemClick(category, subItem, event)}
                            />
                        )}
                    </SubTraditionTitle>
                </React.Fragment>
            ))}
        </div>
    );
}