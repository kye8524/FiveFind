import React, {Component, useState, useEffect} from "react";
import {NavLink, Route, withRouter} from 'react-router-dom';
import "./Header.css";

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return(
            <div className={scrollPosition < 300 ? "header" : "nav"}>
                <div className="header_title">FiveFind</div>
                <ul className="header_box">
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>팀 모집</li>
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>팀 찾기</li>
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>공지사항</li>
                    <li className="header_box_bar" />
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>로그인 / 회원가입</li>
                </ul>
            </div>
        )


}
export default Header;