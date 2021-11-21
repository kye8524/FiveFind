import React, {Component} from "react";
import './Index.css';
import Header from "../../components/Header/Header";
import People from "../../img/people.svg";
import Footer from "../../components/Footer/Footer";

class Index extends Component{
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
                        <ul className="index_recruit_block">
                            <li className="index_recruit_block_title">UI/UX/콘텐츠 디자이너 모집</li>
                            <li className="index_recruit_block_info">생산성,핀테크,플랫폼 상용화 단계 현재 구성원 7명 서울특별시 중구</li>
                            <li className="index_recruit_block_author">by (주)라이프플래닝연구소</li>
                        </ul>
                        <ul className="index_recruit_block">
                            <li className="index_recruit_block_title">UI/UX/콘텐츠 디자이너 모집</li>
                            <li className="index_recruit_block_info">생산성,핀테크,플랫폼 상용화 단계 현재 구성원 7명 서울특별시 중구</li>
                            <li className="index_recruit_block_author">by (주)라이프플래닝연구소</li>
                        </ul>
                        <ul className="index_recruit_block">
                            <li className="index_recruit_block_title">UI/UX/콘텐츠 디자이너 모집</li>
                            <li className="index_recruit_block_info">생산성,핀테크,플랫폼 상용화 단계 현재 구성원 7명 서울특별시 중구</li>
                            <li className="index_recruit_block_author">by (주)라이프플래닝연구소</li>
                        </ul>
                    </div>
                </div>
                <div className="index_mate">
                    <div className="index_recruit_title">새로운 메이트 추천</div>
                    <div className="index_mate_container">
                        <ul className="index_mate_block">
                            <img className="index_mate_block-image" src={People}/>
                            <li className="index_mate_block_name">김유나</li>
                            <li className="index_mate_block_info">서울과기대 컴공 3학년</li>
                            <li className="index_mate_block_intro">안녕하세요. 김유나입니다. 어쩌구 저쩌구 가나다라마바사아자차카타</li>
                        </ul>
                        <ul className="index_mate_block">
                            <img className="index_mate_block-image" src={People}/>
                            <li className="index_mate_block_name">김유나</li>
                            <li className="index_mate_block_info">서울과기대 컴공 3학년</li>
                            <li className="index_mate_block_intro">안녕하세요. 김유나입니다. </li>
                        </ul>
                        <ul className="index_mate_block">
                            <img className="index_mate_block-image" src={People}/>
                            <li className="index_mate_block_name">김유나</li>
                            <li className="index_mate_block_info">서울과기대 컴공 3학년</li>
                            <li className="index_mate_block_intro">안녕하세요. 김유나입니다. </li>
                        </ul>
                        <ul className="index_mate_block">
                            <img className="index_mate_block-image" src={People}/>
                            <li className="index_mate_block_name">김유나</li>
                            <li className="index_mate_block_info">서울과기대 컴공 3학년</li>
                            <li className="index_mate_block_intro">안녕하세요. 김유나입니다. </li>
                        </ul>
                    </div>
                </div>
                <div className="index_notice">
                    <div className="index_notice_title">공지사항</div>
                    <div className="index_notice_text">가장 최근 공지사항 하나 불러오면 될듯</div>
                </div>
                <div className="index_start">
                    <div className="index_start_title">start with FiveFind</div>
                    <div className="index_start_text">당신과 함께 팀을 이루고 싶은 <strong>메이트</strong>들이 기다리고 있습니다. 지금, <strong>파이브파인드</strong>에서 만나보세요!</div>
                    <button className="index_start_btn">팀 빌딩 시작하기</button>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Index;