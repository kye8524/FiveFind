import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import './mypage.css'
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import axios from "axios";
import {getCookie} from "../../cookies";

class MyPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {'productSeq': '1'},
            email : '',
            pwd : '',
            name : '',
            info : '',
            phone : '',
            userSeq : undefined,
            token : undefined,
        }
    }

    getUserInfo = async function () {
        this.state.userSeq = getCookie("userSeq");
        let result =await axios ({
            method : 'GET',
            url : `http://localhost:8080/user/${this.state.userSeq}`,
            data: { },
            headers : {
                "Content-Type" : 'application/json',
                "x-access-token" : getCookie("accessToken"),
            },
        });
        this.setState({userInfo : result.data.data});
        console.log(this.state.userInfo);
    };


    handleChangeId = (e) => {
        this.setState({id: e.target.value})
    }
    handleChangePwd = (e) => {
        this.setState({pwd: e.target.value})
    }
    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    handleChangeInfo = (e) => {
        this.setState({info: e.target.value})
    }
    handleChangePhoneNum = (e) => {
        this.setState({phoneNumber: e.target.value})
    }

    componentDidMount() {
        this.getUserInfo();
    }
    render() {

        return(
            <div>
                <Header />
                <div className="profilePage">
                    <div className="profilePage_line" />
                    <div className="profilePage_title">Profile</div>
                    <div className="profilePage_main">
                        <SideNav/>
                        <div>
                            <div className="profile">
                                <div className="profile_box_welcome">
                                    <img src={People} className="profile_box_welcome_image" />
                                    <div className="profile_box_welcome_line"/>
                                    <div className="profile_box_welcome_text">
                                        회원님 저희 페이지를 이용해주셔서 감사합니다.
                                    </div>
                                </div>
                                <div className="profile_box_info">
                                    <div className="profile_box_info_title">기본정보</div>
                                    <div className="profile_box_info_input">
                                        <div className="profile_box_info_input_box">
                                            <div className="profile_box_info_input_box_name">아이디</div>
                                            <input type="text" className="profile_box_info_input_box_value" value={this.state.userInfo.email} onChange={this.handleChangeId}/>
                                        </div>
                                        <div className="profile_box_info_input_box">
                                            <div className="profile_box_info_input_box_name">이름</div>
                                            <input type="text" className="profile_box_info_input_box_value" value={this.state.userInfo.name} onChange={this.handleChangeName}/>
                                        </div>
                                        <div className="profile_box_info_input_box">
                                            <div className="profile_box_info_input_box_name">휴대전화</div>
                                            <input type="text" className="profile_box_info_input_box_value" value={this.state.userInfo.phone} onChange={this.handleChangePhoneNum}/>
                                        </div>
                                        <div className="profile_box_info_input_box">
                                            <div className="profile_box_info_input_box_name">한줄소개</div>
                                            <input type="text" className="profile_box_info_input_box_value" value={this.state.userInfo.info}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_box_button">
                                    <Link to='/'><button className="profile_box_confirm">홈으로</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MyPage;