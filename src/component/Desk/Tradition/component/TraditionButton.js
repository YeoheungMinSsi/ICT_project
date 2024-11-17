import React from 'react';

export default function TraditionButton({ activeButton, onButtonClick }) {
    return (
        <div className="btn-group">
            <button
                className={`btn-tradition ${activeButton === 'tradition' ? 'active' : ''}`}
                onClick={() => onButtonClick('tradition')}
            >
                전통주란?
            </button>
            <button
                className={`btn-region ${activeButton === 'region' ? 'active' : ''}`}
                onClick={() => onButtonClick('region')}
            >
                3대 전통주
            </button>
        </div>
    );
}