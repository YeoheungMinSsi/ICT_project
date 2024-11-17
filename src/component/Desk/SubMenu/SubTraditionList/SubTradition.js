import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { traditionCategories } from './traditionCategories';
import '../../../../css/allCss.css'

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
            navigate(`/tradition/${category.path}`);
        }
    }

    const handleSubItemClick = (category, subItem) => {
        if (category.title === "전통주") {
            navigate(`/tradition/${subItem.path}`);
        } else {
            navigate(`/tradition/${category.path}/${subItem.path}`);
        }
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
                                onItemClick={(subItem) => handleSubItemClick(category, subItem)}
                            />
                        )}
                    </SubTraditionTitle>
                </React.Fragment>
            ))}
        </div>
    );
}