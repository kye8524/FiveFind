import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Index from "./pages/index/Index";

import Login from './pages/login/LoginPage';
import Join from './pages/join/JoinPage';
import MyPage from "./pages/mypage/mypage";
import NoticePage from "./pages/notice/notice_page";
import NoticeDetail from "./pages/notice_detail/notice_detail";



class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path='/' component={Index} exact/>
            <Route path='/login' component={Login}/>
            <Route path='/join' component={Join}/>
            <Route path='/mypage' component={MyPage}/>
            <Route path='/notice' component={NoticePage}/>
            <Route path='/notice_detail/:noticeSeq' component={NoticeDetail} />
        </div>
    );
  }
}

export default App;
