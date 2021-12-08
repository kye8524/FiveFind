import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_list.css';
import Category from "../../components/Category/Category";

class TeamList extends Component{
    render() {
        return(
            <div>
                <div className="list">
                    <Header/>
                    <div className="list_container">
                        <div className="list_bar"/>
                        <div className="list_title">팀 찾기</div>
                        <div className="list_box_container">
                            <Link to='/list_detail'>
                            <ul className="list_box">
                                <div className="row">
                                    <img className="list_box_img" src={People}/>
                                    <li className="list_box_name">팀이름</li>
                                </div>
                                <li className="list_box_title">제목</li>
                                <li className="list_box_category">개발</li>
                                <li className="list_box_text">가나다라마바사</li>
                            </ul>
                            </Link>
                            <ul className="list_box">
                                <div className="row">
                                    <img className="list_box_img" src={People}/>
                                    <li className="list_box_name">김유나</li>
                                </div>
                                <li className="list_box_title">프론트엔드 개발자 모집</li>
                                <li className="list_box_category">개발자</li>
                                <li className="list_box_text">가나다라마바사</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TeamList;