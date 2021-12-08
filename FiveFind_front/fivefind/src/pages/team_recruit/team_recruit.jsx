import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_recruit.css';
import  '../team_list/team_list.css';


class TeamRecruit extends Component{
    render() {
        return(
            <div>
                <div className="list">
                    <Header/>
                    <div className="list_container">
                        <div className="list_bar"/>
                        <div className="list_title">팀 모집</div>
                            <div className="recruit_container">
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">팀 이름</li>
                                    <input type="text" className="recruit_box_text"/>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">제목</li>
                                    <input type="text" className="recruit_box_text"/>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">카테고리</li>
                                    <form>
                                        <select className="recruit_box_category">
                                            <option>반려동물</option>
                                            <option>운동</option>
                                            <option>개발</option>
                                            <option>여행</option>
                                        </select>
                                    </form>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">팀 상세설명</li>
                                    <textarea className="recruit_box_textbox"/>
                                </ul>
                                <button className="recruit_box_btn">등록</button>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TeamRecruit;