import React from 'react';
import '../../css/TraditionAllCss.scss';

import AllTraditionList from "./AllTraditionList";

export default function AllTraditionMain() {
    return (
        <>
            <div className="all-tradi-list-main">
                <AllTraditionList />
                <AllTraditionList />
                <AllTraditionList />
                <AllTraditionList />
            </div>
        </>
    );
}
