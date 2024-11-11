import React from 'react';
import '../../../../css/allCss.css'

const SubGlassList = ({ items }) => (
    <ol className="sub-glass-list">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ol>
);

export default SubGlassList;