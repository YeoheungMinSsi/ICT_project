import React from 'react';
import './SubTraditionMenu.scss'

const SubTraditionList = ({ items, onItemClick }) => (
    <div className="sub-tradition-list-container">
        <ul className="sub-tradition-list">
            {items.map((item, index) => (
                <li key={index} onClick={(event) => onItemClick(item, event)}>{item.title}</li>


            ))}
        </ul>
    </div>
);

export default SubTraditionList;