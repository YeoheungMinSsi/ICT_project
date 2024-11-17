import React from 'react';

export default function TraditionLSide() {


    const regionList = ["경기도", "경상도", "전라도", "충청도", "강원도", "제주도", ];

    return (
        <div>
            <div>
                <h2>전통주/지역주</h2>
                <hr/>
                <ol>
                    {regionList.map((region, index) => {
                        return (
                            <li key={index}>
                                {region}  {/*대한민국 6도를 배열로 저장하고 배열을 가지고 오는 부분*/}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}