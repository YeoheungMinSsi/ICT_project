import React from 'react';
import '../../css/allCss.css'
import Carousels from './Carousels';
import Nav from "./Nav";
import SubMenu from "./SubMenu";
// import Test from "./test";

export default function Home() {

    return(
        <div className="Home">
            {/*<section className="notice">*/}
            {/*    공지사항*/}
            {/*</section>*/}
            <Nav />
                {/*목차, 로그인,회원가입 -> 프로필 -> 팝오버로 하는 것으로*/}
            <main className="main">
                <section className="mainCarousel">
                    <Carousels />
                </section>
                <section>
                    <SubMenu />
                    메인 페이지
                </section>
            </main>
            <footer className="footer">
                기타 페이지
            </footer>
        </div>
    );
}