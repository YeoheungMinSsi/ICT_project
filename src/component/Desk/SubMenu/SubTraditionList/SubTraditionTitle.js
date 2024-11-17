import React from 'react';
import './SubTraditionCss.css'

const SubTraditionTitle = ({ title, children, onClick}) => (
    <div className="sub-tradition-title" onClick={onClick}>
        <p>{title}</p>
        {children}
    </div>
);

export default SubTraditionTitle;