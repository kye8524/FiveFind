import React, {Component, useState, useEffect} from "react";
import { setCookie, getCookie, deleteCookie} from '../../cookies';
import {Link, withRouter} from "react-router-dom";
import "./Header.css";

class Header extends Component{
    constructor(p) {
        super(p);
        this.state={
            modal : false,
            token : undefined,
            keyword : '',
            userSeq : undefined,
            userName: undefined,
            products : [],
            sum : 0
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    logout=()=> {
        const {history} = this.props;
        deleteCookie("accessToken");
        deleteCookie("userSeq");
        deleteCookie("userName");
        this.setState({
            token : undefined
        });
        alert('로그아웃 되었습니다.');
        history.push('/');
    }

    render() {
        return(
            <div className="header">
                <Link to={'/'}><div className="header_title">FiveFind</div></Link>
                <ul className="header_box">
                    <li className="header_box_text">팀 모집</li>
                    <li className="header_box_text">팀 찾기</li>
                    <li className="header_box_text"><Link to='/notice'>공지사항</Link></li>
                    <li className="header_box_bar" />
                    <li className="header_box_text">{!(this.state.token) ? <Link to ="/join"><div className='header-top-login-text'>회원가입</div></Link> : <Link to="/mypage"><div>마이페이지</div></Link>}</li>
                    <li className="header_box_text">{!(this.state.token) ? <Link to='/login'><div>로그인</div></Link> : <div id="logout" onClick={this.logout}>{this.state.userName}님&nbsp;&nbsp; 로그아웃</div>}</li>

                </ul>
            </div>
        )
    }

}
export default Header;