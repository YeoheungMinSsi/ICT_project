// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import '../../../../css/allCss.css'
// //
// // import SubTraditionTitle from './SubTraditionTitle';
// // import TraditionDivider from './TraditionDivider';
//
// export default function SubTradition({hoveredId}) {
//     const [menuState, setMenuState] = useState('');
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         setMenuState(hoveredId ? 'open' : 'close');
//     }, [hoveredId]);
//
//     const handleTitleClick = (category) => {
//         if (typeof category === 'string') {
//             navigate('/tradition');
//         } else if (typeof category === 'object') {
//             navigate(`/tradition/${category.path}`);
//         }
//     }
//
//     const drinkCategories = [
//         {
//             title: "전통주",
//             path: "traditional",
//             subMenu: [{ title: "전통주 모음", path: "collection" }]
//         },
//         {
//             title: "경기도",
//             path: "gyeonggi",
//             subMenu: [{ title: "경기도 술", path: "gyeonggi-drinks" }]
//         },
//         {
//             title: "경상도",
//             path: "gyeongsang",
//             subMenu: [{ title: "경상도 술", path: "gyeongsang-drinks" }]
//         },
//         {
//             title: "전라도",
//             path: "jeolla",
//             subMenu: [{ title: "전라도 술", path: "jeolla-drinks" }]
//         },
//         {
//             title: "충청도",
//             path: "chungcheong",
//             subMenu: [{ title: "충청도 술", path: "chungcheong-drinks" }]
//         },
//         {
//             title: "강원도",
//             path: "gangwon",
//             subMenu: [{ title: "강원도 술", path: "gangwon-drinks" }]
//         },
//         {
//             title: "제주도",
//             path: "jeju",
//             subMenu: [{ title: "제주도 술", path: "jeju-drinks" }]
//         }
//     ];
//
//     return (
//         <div className={`tradition-submenu ${menuState}`}>
//             {drinkCategories.map((category, index) => (
//                 <React.Fragment key={index}>
//                     <SubTraditionTitle
//                         title={category.title}
//                         onClick={() => handleTitleClick(category)}
//                     />
//                     {category.subMenu && category.subMenu.map((subItem, subIndex) => (
//                         <SubTraditionTitle
//                             key={`${index}-${subIndex}`}
//                             title={subItem.title}
//                             onClick={() => handleTitleClick(subItem)}
//                             className="sub-item"
//                         />
//                     ))}
//                     {index < drinkCategories.length - 1 && <TraditionDivider />}
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }