import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import People from "../../img/people.svg";
import './team_list.css';
import Category from "../../components/Category/Category";
import axios from "axios";
import _ from "lodash";

class TeamList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teams : [{'teamSeq': '1'}],
            teamSeq : 0,
            currentPage: 1,
            postsPerPage: 6,
            pageNumbers: [],
            pN : []
        }
    }
    currentPosts(tmp) {
        var indexOfLast = this.state.currentPage * this.state.postsPerPage;
        var indexOfFirst = indexOfLast - this.state.postsPerPage;
        let currentPosts = 0;
        currentPosts = _.slice(tmp,indexOfFirst, indexOfLast);
        console.log(currentPosts);
        return currentPosts;
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
        this.setState({teams : result.data.data});
        var pageNumbers= [];
        for(let i =1; i<=Math.ceil(this.state.teams.length/this.state.postsPerPage); i++){
            pageNumbers.push({'num' : i});
        }
        this.setState ({pN : pageNumbers});
    }

    pagination=(e)=> {
        this.setState({currentPage : e});
    }

    teamProducts(f) {
        if (f === '전체') {
            this.setState({teams: this.state.teams});
            var pageNumbers= [];
            for(let i =1; i<=Math.ceil(this.state.teams.length/this.state.postsPerPage); i++){
                pageNumbers.push({'num' : i});
            }
            this.setState ({pN : pageNumbers});
        } else {
            var filterProduct = _.filter(this.state.teams, {'category': f});
            this.setState({fieldProducts: filterProduct});
            this.setState({currentPage : 1});
            var pageNumbers1= [];
            for(let i =1; i<=Math.ceil(filterProduct.length/this.state.postsPerPage); i++){
                pageNumbers1.push({'num' : i});
            }
            this.setState ({pN : pageNumbers1});
        }

        //클릭시 강조 표시 추가 필요
    }

    componentDidMount() {
        this.getTeam();
    }
    render() {
        return(
            <div>
                <div className="list">
                    <Header/>
                    <div className="list_container">
                        <div className="list_bar"/>
                        <div className="list_title">팀 찾기</div>
                        <div className="list_box_container">
                            {this.currentPosts(this.state.teams).map(arr=>(
                                <div key={arr.seq}>
                                    <Link to={`/list_detail/${arr.seq}`}>
                                        <ul className="list_box">
                                            <div className="row">
                                                <img className="list_box_img" src={People}/>
                                                <li className="list_box_name">{arr.name}</li>
                                            </div>
                                            <li className="list_box_title">{arr.title}</li>
                                            <li className="list_box_category">{arr.category}</li>
                                            <li className="list_box_text">{arr.content}</li>
                                        </ul>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='page-num-box-notice'>
                        {this.state.pN.map(arr=> (
                            <button className='page-num' key={arr.num} onClick={()=>this.pagination(arr.num)}>{arr.num}</button>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(TeamList);