import React, {Component} from 'react'
import './notice_page.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import _ from "lodash";



class NoticePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products : [{'productSeq' : '1'}],
            notices : [{'noticeSeq': '1'}],
            noticeSeq : 0,
            currentPage: 1,
            postsPerPage: 5,
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

    getNotice = async function() {
        let result =await axios ({
            method : 'GET',
            url : 'http://localhost:8080/notice',
            data: { },
            headers : {

                "Content-Type" : 'application/json'
            },
        })
        this.setState({notices : result.data.data});
        var pageNumbers= [];
        for(let i =1; i<=Math.ceil(this.state.notices.length/this.state.postsPerPage); i++){
            pageNumbers.push({'num' : i});
        }
        this.setState ({pN : pageNumbers});
    }

    pagination=(e)=> {
        this.setState({currentPage : e});
    }

    noticeProducts(f) {
        if (f === '전체') {
            this.setState({notices: this.state.notices});
            var pageNumbers= [];
            for(let i =1; i<=Math.ceil(this.state.notices.length/this.state.postsPerPage); i++){
                pageNumbers.push({'num' : i});
            }
            this.setState ({pN : pageNumbers});
        } else {
            var filterProduct = _.filter(this.state.notices, {'field': f});
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
        this.getNotice();
    }
    render(){
        return(
            <div>

                <div className="orderPage">
                    <Header />
                    <div className="orderPage_line" />
                    <div className="orderPage__title">Notice</div>
                    <div className="orderPage__main">
                        <div>
                            <div className='notice-info-head'>
                                <div className='notice-info-title'>공지사항</div>
                                <div className='notice-info-sortBtn'>
                                    <button className='notice-info-sort'>최신순</button>
                                </div>
                            </div>
                            <div className='order-info'>
                                <div className="order_info_box">
                                    <div className="notice">
                                        <div className="notice-subject">
                                            <div className="notice-seq">번호</div>
                                            <div className="notice-title">제목</div>
                                            <div className="notice-date">등록일</div>
                                        </div>
                                        {this.currentPosts(this.state.notices).map(arr=>(
                                            <div key={arr.seq}>
                                                <Link to={`/notice_detail/${arr.seq}`}>
                                                    <div className="notice-content">
                                                        <div className="notice-seq">{arr.seq}</div>
                                                        <div className="notice-title">{arr.title}</div>
                                                        <div className="notice-date">{arr.reg_time}</div>
                                                    </div>
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
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(NoticePage);
