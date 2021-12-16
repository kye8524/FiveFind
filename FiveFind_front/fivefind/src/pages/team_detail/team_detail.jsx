import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_detail.css';
import  '../team_list/team_list.css';
import axios from "axios";


class TeamDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teamInfo : []
        }
    }

    getTeamInfo = async function() {
        let result =await axios ({
            method : 'GET',
            url : `http://localhost:8080/team/${this.props.match.params.teamSeq}`,
            data: { },
            headers : {
                "Content-Type" : 'application/json'
            },
        })
        this.setState({teamInfo : result.data.data});
    }

    componentDidMount() {
        this.getTeamInfo();
        console.log(this.props.match.params.teamInfo);
    }
    render() {
        return(
            <div className="detail">
                <Header/>
                <div className="detail_container">
                    <div className="detail_title">{this.state.teamInfo.title}</div>
                 <ul className="detail_box">
                     <li className="detail_box_title">팀 이름</li>
                     <li className="detail_box_text">{this.state.teamInfo.name}</li>
                 </ul>
                    <ul className="detail_box">
                        <li className="detail_box_title">카테고리</li>
                        <li className="detail_box_text">{this.state.teamInfo.category}</li>
                    </ul>
                    <div className="detail_text">
                        {this.state.teamInfo.content}</div>
                    <Link to="/list"><button className="detail_btn">목록으로</button></Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(TeamDetail);