import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Index from "./pages/index/Index";
import Login from './pages/login/LoginPage';
import Join from './pages/join/JoinPage';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path='/' component={Index} exact/>
            <Route path='/login' component={Login}/>
            <Route path='/join' component={Join}/>
        </div>
    );
  }
}

export default App;
