import React, { useState, useEffect } from 'react';
import '../../../../css/allCss.css'

export default function SubBoard({hoveredId}) {
    const [menuState, setMenuState] = useState('');

    useEffect(() => {
        if (hoveredId) {
            setMenuState('open');
        } else {
            setMenuState('close');
        }
    }, [hoveredId]);


    return (
        <>
            <div className={`board-submenu ${menuState}`}> {/*술분류에대한 페이지*/}
                <div className="sub-board-title">
                    <p>공지사항</p>
                </div>
                <div className="board-divider-pre"><div className="board-divider"></div></div> {/*구분선 모양*/}
                <div className="sub-board-title">
                    <p>자유게시판</p>
                </div>
                <div className="board-divider-pre"><div className="board-divider"></div></div> {/*구분선 모양*/}
                <div className="sub-board-title">
                    <p>QnA</p>
                </div>
                <div className="board-divider-pre"><div className="board-divider"></div></div> {/*구분선 모양*/}
                <div className="sub-board-title">
                    <p>FAQ</p>
                </div>
            </div>
        </>
    );
}
