import React from 'react';
import '../../../../css/allCss.css'

const SubGlassTitle = ({ title, children, onClick }) => (
    <div className="sub-glass-title" onClick={onClick}>
        <p>{title}</p>
        {children}
    </div>
);

export default SubGlassTitle;