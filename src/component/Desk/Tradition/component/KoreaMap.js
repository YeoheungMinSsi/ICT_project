import React from 'react';
import KoreaMapData from './KoreaMapData'
import '../css/TraditionAllCss.css'

export default function KoreaMap({ onRegionHover, onRegionClick, selectedRegion }) {
    const handleRegionHover = (region) => {
        if (!selectedRegion) {
            onRegionHover(region);
        }
    };

    const handleRegionClick = (region) => {
        onRegionClick(region);
    };

    // 경기도를 마지막에 렌더링하기 위해 데이터를 재정렬
    const sortedEntries = Object.entries(KoreaMapData).sort(([a], [b]) => {
        if (a === 'gyeonggi') return 1;
        if (b === 'gyeonggi') return -1;
        return 0;
    });

    return(
        <div className="korea-map-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" className="korea-map-svg">
                {sortedEntries.map(([region, areas]) => (
                    <g
                        key={region}
                        className={`${region} ${selectedRegion === region ? 'selected' : ''} ${selectedRegion && selectedRegion !== region ? 'inactive' : ''}`}
                        onMouseEnter={() => handleRegionHover(region)}
                        onClick={() => handleRegionClick(region)}
                    >
                        {areas.map(area => (
                            <path
                                key={area.id}
                                id={area.id}
                                className={area.className}
                                d={area.d}
                            />
                        ))}
                    </g>
                ))}
            </svg>
        </div>
    );
}

// import React from 'react';
// import KoreaMapData from './KoreaMapData'
// import '../css/TraditionAllCss.css'
//
// export default function KoreaMap({ onRegionClick, selectedRegion }) {
//     const handleRegionClick = (region) => {
//         onRegionClick(region);
//     };
//
//     // 경기도를 첫 번째로 렌더링하기 위해 데이터를 재정렬
//     const sortedEntries = Object.entries(KoreaMapData).sort(([a], [b]) => {
//         if (a === 'gyeonggi') return -1;
//         if (b === 'gyeonggi') return 1;
//         return 0;
//     });
//
//     return(
//         <div className="korea-map-container">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" className="korea-map-svg">
//                 {sortedEntries.map(([region, areas]) => (
//                     <g
//                         key={region}
//                         className={`${region} ${selectedRegion === region ? 'selected' : ''}`}
//                         onClick={() => handleRegionClick(region)}
//                     >
//                         {areas.map(area => (
//                             <path
//                                 key={area.id}
//                                 id={area.id}
//                                 className={area.className}
//                                 d={area.d}
//                             />
//                         ))}
//                     </g>
//                 ))}
//             </svg>
//         </div>
//     );
// }