import React, {Component} from 'react';
import './loginPage.css';
import Header from '../../../src/components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {getCookie, setCookie} from "../../cookies";

class Login_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            token : undefined,
            userSeq : undefined,
            userName: undefined
        }
    }

    onKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.login();
        }
    }


    handleGoJoin = (e) => {
        const {history} = this.props;
        history.push('/join');
    }
    handleChangeId = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    handleChangePwd = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    login = () => {
        const email = this.state.email;
        const pw = this.state.password;
        const result = axios( {
            method : 'POST',
            url : "http://localhost:8080/user/login",
            headers: {
                "Content-Type": `application/json`,
            },
            data : {
                email : email,
                pwd : pw
            }
        }).then((result=>{
            if(result.data.response==="error"){
                alert('아이디와 비밀번호를 다시 확인해주세요');
                document.getElementById("login_id_box").value='';
                document.getElementById("login_pw_box").value='';
            }else{
                const {history} = this.props;
                this.state.token = result.data.data.token;
                this.state.userSeq = result.data.data.seq;
                this.state.userName=result.data.data.name;
                console.log(result.data.data.name)
                setCookie("userSeq", this.state.userSeq);
                setCookie("accessToken", this.state.token);
                setCookie("userName",this.state.userName);
                history.push('/');
                alert(result.data.data.name+'님 환영합니다!');
            }
        }));

    }
    render() {
        const {email,password} = this.state;
        return (
            <div>
                <div className='login_page'>
                    <Header/>
                        <div className="login">
                            <div className="login-header-bar"/>
                            <div className='login__title'>Login</div>
                            <div className='login__box'>
                                <div className='login__form__box'>
                                    <div className='login__form__content'>
                                        <div className='id__box'><div className="login-form-box-size">Email</div> <input type="text" className='input' name='email' id='login_id_box' value={email} onChange={this.handleChangeId} required/> </div>
                                        <div className='pw__box'><div className="login-form-box-size">Password</div><input type="password" className='input' name='pw' id='login_pw_box' value={password} onChange={this.handleChangePwd} onKeyPress={this.onKeyPress} required/></div>
                                        <button className='login-join' onClick={this.handleGoJoin}>회원가입</button>
                                        <button className='login__btn' onClick={this.login}>Log in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withRouter(Login_page);