import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_recruit.css';
import  '../team_list/team_list.css';
import axios from "axios";
import {getCookie, setCookie} from "../../cookies";


class TeamRecruit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            category: '',
            content: '',
            token : undefined,
            userSeq : undefined
        }
    }

    join = () => {
        let {name, title, category, content} = this.state;
        if(!name || !title || !category || !content){
            alert("필수 항목을 작성해주세요")
        }else {
            let result = axios({
                method: 'POST',
                url: "http://localhost:8080/team/regist",
                headers: {
                    "Content-Type": `application/json`,
                },
                data: {
                    name: name,
                    title: title,
                    category: category,
                    content : content
                }
            }).then((result) => {
                    const {history} = this.props;
                    alert('팀등록이 성공적으로 완료되었습니다.');
                    history.push('/');

            });
        }
    }

    handleChangeTitle = (e) => {
        this.setState({title: e.target.value})
    }
    handleChangeCategory = (e) => {
        this.setState({category: e.target.value})
    }
    handleChangeContent = (e) => {
        this.setState({content: e.target.value})
    }
    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const {name,title,category,content} = this.state;
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
                                    <input type="text" className="recruit_box_text" value={name} onChange={this.handleChangeName} required/>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">제목</li>
                                    <input type="text" className="recruit_box_text" value={title} onChange={this.handleChangeTitle} required/>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">카테고리</li>
                                    <form>
                                        <select className="recruit_box_category" value={category} onChange={this.handleChangeCategory}>
                                            <option>카테고리를 선택해 주세요</option>
                                            <option>반려동물</option>
                                            <option>운동</option>
                                            <option>개발</option>
                                            <option>여행</option>
                                        </select>
                                    </form>
                                </ul>
                                <ul className="recruit_box">
                                    <li className="recruit_box_title">팀 상세설명</li>
                                    <textarea className="recruit_box_textbox" value={content} onChange={this.handleChangeContent} required/>
                                </ul>
                                <button className="recruit_box_btn" onClick={this.join}>등록</button>
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TeamRecruit;