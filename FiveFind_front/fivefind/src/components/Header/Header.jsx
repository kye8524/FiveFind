import React, {Component} from "react";
import "./Header.css";

class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header_title">FiveFind</div>
                <ul className="header_box">
                    <li className="header_box_text">팀 모집</li>
                    <li className="header_box_text">팀 찾기</li>
                    <li className="header_box_text">공지사항</li>
                    <li className="header_box_bar" />
                    <li className="header_box_login">로그인/회원가입</li>
                </ul>
            </div>
        )
    }
}
export default Header;