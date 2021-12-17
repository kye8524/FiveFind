import React, {Component} from 'react';
import './joinPage.css';
import Header from '../../../src/components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {withRouter} from "react-router-dom";
import axios from "axios";
import {setCookie} from "../../cookies";

class JoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            pwdRe: '',
            name: '',
            phone: '',
            info: '',
            isValidID: undefined,
            isValidPwd : undefined,
            passwordCheck: undefined,
            isMatchPassword:undefined,
            onClick: undefined,
            onClick2: undefined,
            checked : false,
            token : undefined,
            userSeq : undefined,
            userName: undefined
        }
    }

    join = () => {
        let {email, pwd, name, info,phone,isValidPwd,isMatchPassword,checked} = this.state;
        if(isValidPwd===false){
            alert("올바르지 않은 비밀번호입니다")
        }else if(isMatchPassword===false){
            alert("비밀번호가 일치하지 않습니다")
        }else if(!email || !pwd || !name || !phone || !info){
            alert("필수 항목을 작성해주세요")
        }else if(checked===false) {
            alert("이용약관에 동의해주세요")
        }else {
            let result = axios({
                method: 'POST',
                url: "http://localhost:8080/user/signup",
                headers: {
                    "Content-Type": `application/json`,
                },
                data: {
                    email: email,
                    pwd: pwd,
                    name: name,
                    info: info,
                    phone: phone,
                }
            }).then((result) => {
                if (result.status < 400) {
                    alert('회원가입이 성공적으로 완료되었습니다.');
                    const response = axios( {
                        method : 'POST',
                        url : "http://localhost:8080/user/login",
                        headers: {
                            "Content-Type": `application/json`,
                        },
                        data : {
                            email : email,
                            pwd : pwd
                        }
                    }).then((response)=>{
                            const {history} = this.props;
                            this.state.token = result.data.data.token;
                            this.state.userSeq = result.data.data.seq;
                            this.state.userName=result.data.data.name;
                            setCookie("userSeq", this.state.userSeq);
                            setCookie("accessToken", this.state.token);
                            setCookie("userName",this.state.userName);
                            history.push('/');

                    });
                }
            });
        }
    }

    isPassword(asValue) {
        let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
        return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    }

    checkValidPasswd = () => {
        let timer;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            if (!this.isPassword(this.state.pwd)) {
                this.setState({ isValidPwd: false });
            } else {
                this.setState({ isValidPwd: true });
            }
        }, 500);
    };

    createPwd = e => {
        // console.log("사인업 이메일: ", e.target.value);
        const __pwd = e.target.value;
        this.setState({ pwd: __pwd });
        this.checkValidPasswd();    //함수 실행
    };
    checkMatchPassword = () => {
        let timer;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            if (this.state.pwd === this.state.passwordCheck) {
                this.setState({ isMatchPassword: true });
            } else {
                this.setState({ isMatchPassword: false });
            }
        }, 500);
    };
    repeatPassword = e => {
        // console.log("사인업 이메일: ", e.target.value);
        const __repwd = e.target.value;
        this.setState({ passwordCheck: __repwd });
        this.checkMatchPassword();    //함수 실행
    };

    handleChangeId = (e) => {
        this.setState({email: e.target.value})
    }
    handleChangePwd = (e) => {
        this.setState({pwd: e.target.value})
    }
    handleChangePwdRe = (e) => {
        this.setState({pwdRe: e.target.value})
    }
    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    handleChangeInfo = (e) => {
        this.setState({info: e.target.value})
    }
    handleChangePhoneNum = (e) => {
        this.setState({phone: e.target.value})
    }
    handleChecked = (e) => {
        this.setState({checked : e.target.checked})
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const {email, pwd, pwdRe, name,info, phone} = this.state;
        return (
            <div>
                <div className="join_page">
                    <Header/>
                    <div>
                        <div className="join">
                            <div className="header__bar" />
                            <div className="join__title">Join</div>
                            <div className="join__box">
                                <div className="join__form__box">
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">이메일
                                            <div className="input__box__alin">
                                                <input type="text" className="input" id="id_box" value={email} onChange={this.handleChangeId} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">비밀번호
                                            <div className="input__box__alin">
                                                <input type="password" className="input" value={this.state.pwd}
                                                       onChange={e => this.createPwd(e)} required/>
                                                    {this.state.pwd ? (
                                                    this.state.isValidPwd ? (
                                                        <div style={{ color: "blue" }}>(8 ~ 10자 영문, 숫자 조합) 사용가능한 비밀번호 입니다.</div>
                                                    ) : (
                                                        <div style={{ color: "red" }}>(8 ~ 10자 영문, 숫자 조합) 유효하지 않은 비밀번호 입니다.</div>
                                                    )
                                                    ) : (<div>(8 ~ 10자 영문, 숫자 조합)</div>)}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">비밀번호 확인
                                            <div className="input__box__alin">
                                                <input type="password" className="input"
                                                                                        value={this.state.passwordCheck}
                                                                                        onChange={e => this.repeatPassword(e)} required/>
                                                {this.state.passwordCheck ? (
                                                    this.state.isMatchPassword ? (
                                                        <div style={{ color: "blue" }}>비밀번호가 일치합니다</div>
                                                    ) : (
                                                        <div style={{ color: "red" }}>
                                                            비밀번호가 일치하지 않습니다.</div>
                                                    )
                                                ) : null}
                                        </div>
                                        </div>
                                    </div>
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">이름<input type="text" className="input" value={name}
                                                                                   onChange={this.handleChangeName} required/></div>
                                    </div>
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">한줄소개<input type="text" className="input" value={info}
                                                                                   onChange={this.handleChangeInfo} required/></div>
                                    </div>
                                    <div className="input__box">
                                        <span>*</span>
                                        <div className="input__box__just">휴대전화<input type="text" className="input"
                                                                                     value={phone}
                                                                                     onChange={this.handleChangePhoneNum} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="agree__box">
                                    <input type="checkbox" className="agree__btn" checked={this.state.checked} onChange={this.handleChecked} required/>
                                    <div>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</div>
                                </div>
                                <button className={`join__btn`} onClick={this.join}>Join</button>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withRouter(JoinPage);