import React, {useState, useEffect} from 'react';
import '../../css/TraditionAllCss.scss';
import { readString } from 'react-papaparse';

export default function AllTraditionList2() {


    return (
        <>
            <div className='all-tradi-list-item'>
                <div className='all-tradi-list-item-img'>
                    <img src="/data/img/죽력고.jpg" alt=""/>
                </div>
                <div className='all-tradi-list-item-info'>
                    <h3>술 이름</h3>
                    <h5>술 도수</h5>
                    <h5>술 종류</h5>
                    <h5>주 원료</h5>
                </div>
                <div className='all-tradi-list-item-tag'>
                    {/*<h3>태그 위치</h3>*/}
                </div>
            </div>
        </>
    );
}
