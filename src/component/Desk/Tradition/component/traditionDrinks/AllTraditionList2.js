// import React, {useState, useEffect} from 'react';
// import '../../css/TraditionAllCss.scss';
// import { readString } from 'react-papaparse';
//
// export default function AllTraditionList2() {
//     const [headers, setHeaders] = useState([]);
//     const [rows, setRows] = useState([]);
//
//     useEffect(() => {
//         // CSV 파일 경로
//         const csvFilePath = '/data/all_tradition.csv';
//
//         fetch(csvFilePath)
//             .then(response => response.text())
//             .then(csvText => {
//                 const parsedData = readString(csvText);
//                 if (parsedData.data.length > 0) {
//                     const newHeaders = parsedData.data[0];
//                     const newRows = parsedData.data.slice(1);
//
//                     setHeaders(newHeaders.slice(0, 6));
//                     setRows(newRows);
//                 }
//             })
//             .catch(error => console.error('Error fetching CSV:', error));
//     }, []);
//
//
//     return (
//         <>
//             <div className="all-tradi-list-main">
//                 <section className="all-tradi-list-main-title">
//                     {headers.map((header, index) => (header && <div key={index} id={`header-${index}`}>{header}</div>))}
//                 </section>
//                 <section className="all-tradi-list-main-value">
//
//                 </section>
//             </div>
//         </>
//     );
// }
