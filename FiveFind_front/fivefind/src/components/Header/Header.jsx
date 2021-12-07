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
        <div className="header">
            <div className="header_title">FiveFind</div>
            <ul className="header_box">
                <li className="header_box_text"><NavLink to = "/">팀 모집</NavLink></li>
                <li className="header_box_text">팀 찾기</li>
                <li className="header_box_text">공지사항</li>
                <li className="header_box_bar" />
                <li className="header_box_text"><NavLink to = "/login">로그인 / 회원가입</NavLink></li>
            </ul>
        </div>
    )
       /* return(
            <div className={scrollPosition < 300 ? "header" : "nav" || window.location.pathname === '/login' ? "header": "header"}>
                <div className="header_title">FiveFind</div>
                <ul className="header_box">
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}><NavLink to = "/">팀 모집</NavLink></li>
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>팀 찾기</li>
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}>공지사항</li>
                    <li className="header_box_bar" />
                    <li className={scrollPosition < 300 ? "header_box_scroll" : "header_box_text"}><NavLink to = "/login">로그인 / 회원가입</NavLink></li>
                </ul>
            </div>
        )
        */

}
export default Header;