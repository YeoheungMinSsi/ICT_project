import React from 'react';
import './SubTraditionCss.css'

const SubTraditionList = ({ items, onItemClick }) => (
    <ul className="sub-tradition-list">
        {items.map((item, index) => (
            <li key={index} onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 방지
                onItemClick(item);
            }}>
                {item.title}
            </li>
        ))}
    </ul>
);

export default SubTraditionList;