import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Index from "./pages/index/Index";


class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path='/' component={Index} exact/>
        </div>
    );
  }
}

export default App;
