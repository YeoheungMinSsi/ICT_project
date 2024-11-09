import React, { useState, useRef, useEffect } from 'react';
import SubDrink from './SubMenu/SubDrink';
import SubGlas from './SubMenu/SubGlass';
import SubBoard from './SubMenu/SubBoard';
import "../../css/allCss.css"

export default function Nav() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const navRef = useRef(null);

    const pageLink = [
        { id: "Drink", alert: "Drink" },
        { id: "Glass", alert: "Glass" },
        { id: "Board", alert: "Board" }
    ];

    function handleHoverOver(id) {
        setHoveredItem(id);
    }

    // nav에 마우스를 가까이하거나 멀어질때 submenu가 뜨게하는 useEffect
    useEffect(() => {
        function handleMouseLeave(event) {
            if (!navRef.current.contains(event.relatedTarget)) {
                setHoveredItem(null);
            }
        }

        const navElement = navRef.current;
        navElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            navElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // nav에서 해당하는 부분에 대해서 hnover했을 때 해당하는 subMenu를 뜨게하는 부분
    const renderSubMenu = () => {
        switch(hoveredItem) {
            case 'Drink':
                return <SubDrink hoveredId={hoveredItem}/>;
            case 'Glass':
                return <SubGlas hoveredId={hoveredItem}/>;
            case 'Board':
                return <SubBoard hoveredId={hoveredItem}/>;
            default:
                return null;
        }
    }



    return (
        <nav className="home-navbar" ref={navRef}>
            <ul className="main-menu">
                {pageLink.map((item) => (
                    <li
                        key={item.id}
                        className={hoveredItem === item.id ? "nav-item nav-hover" : "nav-item"}
                        onMouseEnter={() => handleHoverOver(item.id)}
                    >
                        {item.alert}
                    </li>
                ))}
            </ul>
            {hoveredItem && renderSubMenu()}
        </nav>
    );
}