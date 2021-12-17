import React, {Component} from "react";
import {Link, Route, withRouter} from 'react-router-dom';
import './Index.css';
import Header from "../../components/Header/Header";
import People from "../../img/people.svg";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import _ from "lodash";

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notices : [{'noticeSeq': '1'}],
            noticeSeq : 0,
            teams : [{'teamSeq': '1'}],
            teamSeq : 0,
            users : [{'userSeq': '1'}],
            userSeq : 0
        }
    }
    getNotice = async function() {
        let result =await axios ({
            method : 'GET',
            url : 'http://localhost:8080/notice',
            data: { },
            headers : {

                "Content-Type" : 'application/json'
            },
        })
        this.setState({notices : result.data.data[0]});
    }
    getTeam = async function() {
        let result =await axios ({
            method : 'GET',
            url : 'http://localhost:8080/team',
            data: { },
            headers : {

                "Content-Type" : 'application/json'
            },
        })
        let arr = result.data.data;
        let sortTeam = _.sortBy(arr, ['seq']);
        let reverseSort = _.reverse(sortTeam);
        let sliceSort =  _.slice(reverseSort,0,3);
        this.setState({teams: sliceSort});
    }

    getUser = async function() {
        let result =await axios ({
            method : 'GET',
            url : 'http://localhost:8080/user',
            data: { },
            headers : {

                "Content-Type" : 'application/json'
            },
        })
        let arr = result.data.data;
        let sortUser = _.sortBy(arr, ['seq']);
        let reverseSort = _.reverse(sortUser);
        let sliceSort =  _.slice(reverseSort,0,4);
        this.setState({users: sliceSort});
    }

    componentDidMount() {
        this.getNotice();
        this.getTeam();
        this.getUser()
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div className="index">
                <Header />
                <div className='index_banner'>
                    <div className="index_banner_title">동료를 구하는, <br/>나만의 팀빌딩 플랫폼</div>
                    <div className="index_banner_text">fivefind는 모두를 위해 사람과 사람들을 이어주는 플랫폼입니다. <br/>
                    특별한 무언가를 함께할 사람을 찾고있다면, <br/> fivefind에서 프로젝트를 시작해보세요!</div>
                    <button className="index_banner_btn">서비스 소개 안내</button>
                </div>
                <div className="index_recruit">
                    <div className="index_recruit_title">새로운 메이트 모집</div>
                    <div className="index_recruit_container">
                        {this.state.teams.map(arr=>(
                            <div key={arr.seq}>
                                <Link to={`/list_detail/${arr.seq}`}>
                                    <ul className="index_recruit_block">
                                        <li className="index_recruit_block_title">{arr.title}</li>
                                        <li className="index_recruit_block_info">{arr.content}</li>
                                        <li className="index_recruit_block_author">by {arr.name}</li>
                                    </ul>
                                </Link>
                            </div>
                            ))}
                    </div>
                </div>
                <div className="index_mate">
                    <div className="index_recruit_title">새로운 메이트 추천</div>
                    <div className="index_mate_container">
                        {this.state.users.map(arr=>(
                            <div key={arr.seq}>
                                <ul className="index_mate_block">
                                    <img className="index_mate_block-image" src={People}/>
                                    <li className="index_mate_block_name">{arr.name}</li>
                                    <li className="index_mate_block_info">{arr.email}</li>
                                    <li className="index_mate_block_intro">{arr.info}</li>
                                </ul>
                            </div>
                            ))}

                    </div>
                </div>
                <div className="index_notice">
                    <div className="index_notice_title"> 최근 공지사항</div>
                    <div className="index_notice_text"><Link to={`/notice_detail/${this.state.notices.seq}`}>{this.state.notices.title}</Link></div>
                </div>
                <div className="index_start">
                    <div className="index_start_title">start with FiveFind</div>
                    <div className="index_start_text">당신과 함께 팀을 이루고 싶은 <strong>메이트</strong>들이 기다리고 있습니다. 지금, <strong>파이브파인드</strong>에서 만나보세요!</div>
                    <Link to='/recruit'><button className="index_start_btn">팀 빌딩 시작하기</button></Link>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Index);