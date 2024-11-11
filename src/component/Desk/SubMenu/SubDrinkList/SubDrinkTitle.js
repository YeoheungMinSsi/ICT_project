import React from 'react';
import '../../../../css/allCss.css'

const SubDrinkTitle = ({ title, children, onClick}) => (
    <div className="sub-drink-title" onClick={onClick}>
        <p>{title}</p>
        {children}
    </div>
);

export default SubDrinkTitle;