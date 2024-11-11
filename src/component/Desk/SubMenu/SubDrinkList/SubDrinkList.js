import React from 'react';
import '../../../../css/allCss.css'

const SubDrinkList = ({ items }) => (
    <ol className="sub-drink-list">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ol>
);

export default SubDrinkList;
