import React, {Component} from 'react'
import '../notice/notice_page.css';
import './notice_detail.css'
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



class NoticeDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            noticeInfo : []
        }
    }

    getNoticeInfo = async function() {
        let result =await axios ({
            method : 'GET',
            url : `http://52.79.196.94:3001/notice/${this.props.match.params.noticeSeq}`,
            data: { },
            headers : {
                "Content-Type" : 'application/json'
            },
        })
        this.setState({noticeInfo : result.data[0]});
        console.log(this.state.noticeInfo);
        console.log(this.props.match.params.noticeSeq);
    }

    componentDidMount() {
        this.getNoticeInfo();
    }

    render(){
        return(
            <div>
                <div className="orderPage">
                    <Header/>
                    <div className="orderPage_line" />
                    <div className="orderPage__title">Notice</div>
                    <div className="orderPage__main">
                        <div>
                            <div className='order_info_title'>공지사항</div>
                            <div className='notice-info'>
                                <div className='notice_info_box'>
                                    <div className='notice-info-box-titleBox'>
                                        <div className='notice-info-box-titleBox-title'>제목</div>
                                        <div className='notice-info-box-titleBox-text'>{this.state.noticeInfo.title}</div>
                                    </div>
                                    <div className='notice-info-box-subBox'>
                                        <div className='notice-info-box-subBox-date'>
                                            <div className='notice-info-box-subBox-title'>작성일</div>
                                            <div className='notice-info-box-subBox-text'>{this.state.noticeInfo.start_date} ~ {this.state.noticeInfo.end_date}</div>
                                        </div>

                                    </div>
                                    <div className='notice-info-box-main'>
                                        <br/>
                                        {this.state.noticeInfo.content}
                                    </div>
                                    <Link to='/notice'><button className='notice-info-box-btn'>목록으로</button></Link>
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
export default withRouter(NoticeDetail);
