import React, {Component, useState, useEffect} from "react";

import {Link, withRouter} from "react-router-dom";

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
                <Link to={'/'}><div className="header_title">FiveFind</div></Link>
                <ul className="header_box">
                    <li className="header_box_text">팀 모집</li>
                    <li className="header_box_text">팀 찾기</li>
                    <li className="header_box_text"><Link to='/notice'>공지사항</Link></li>
                    <li className="header_box_bar" />
                    <li className="header_box_text"><Link to='/login'><div>로그인</div></Link></li>
                    <li className="header_box_text"><Link to='/join'><div>회원가입</div></Link></li>
                </ul>
            </div>
        )


}
export default Header;