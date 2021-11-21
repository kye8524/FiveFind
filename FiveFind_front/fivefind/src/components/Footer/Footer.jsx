import React, {Component} from "react"
import "./Footer.css"

class Footer extends Component{
    render() {
        return(
            <div className="footer">
                <div className="index_container">
                    <div className="footer_box_logo">Fivefind</div>
                    <ul className="footer_box">
                        <li className="footer_box_text">공지사항</li>
                        <li className="footer_box_text">회원약관</li>
                        <li className="footer_box_text">개인정보처리방침</li>
                        <li className="footer_box_text">고객문의</li>
                    </ul>
                </div>
                <div className="footer_text">
                    (주)파이브파인드  | 대표이사 김예은 | 개인정보관리책임자 김유나(yui880@naver.com)<br />
                    서울 노원구 공릉로 58길 130, 지하1층 (주)파이브파인드 | 010-2212-2625  | 점심시간(13:00~14:00)<br/>
                    사업자등록번호 1233-45-67890 | 통신판매업신고번호 제2018-서울노원-11111호(사업자정보확인) | 유료직업소개사업등록번호: (국내)제2020-3220237-14-5-00014호
                </div>
            </div>
        )
    }
}
export default Footer;