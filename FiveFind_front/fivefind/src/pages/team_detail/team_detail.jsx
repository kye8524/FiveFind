import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_detail.css';
import  '../team_list/team_list.css';


class TeamDetail extends Component{
    render() {
        return(
            <div className="detail">
                <Header/>
                <div className="detail_container">
                    <div className="detail_title">제목ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                 <ul className="detail_box">
                     <li className="detail_box_title">팀 이름</li>
                     <li className="detail_box_text">ㅇㅇㅇㅇㅇ</li>
                 </ul>
                    <ul className="detail_box">
                        <li className="detail_box_title">카테고리</li>
                        <li className="detail_box_text">ㅇㅇㅇㅇㅇ</li>
                    </ul>
                    <div className="detail_text">
                        K-Pop 팬덤 프로듀서 플랫폼<br/>
                        2012년 음악전문 크라우드펀딩 플랫폼으로 시작한 '뮤직킹'은 2015년 글로벌 K-Pop 체험 프로그램 '킹 스튜디오'에 이어 2022년 10주년을 앞두고 K-Pop 팬덤 프로듀서 플랫폼을 준비하고 있습니다.
                    </div>
                    <Link to="/list"><button className="detail_btn">목록으로</button></Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TeamDetail;