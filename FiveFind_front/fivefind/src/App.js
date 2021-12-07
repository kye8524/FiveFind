import React, {Component} from 'react';
import './App.css';
import {Link, Route, withRouter} from 'react-router-dom';
import Index from "./pages/index/Index";
import Login from "./pages/login/Login";


class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path='/' component={Index} exact/>
            <Route path='/login' component={Login}/>


        </div>
    );
  }
}

export default App;
