import React, {Component} from "react";
import './Index.css';
import Header from "../../components/Header/Header";
import Banner from "../../img/banner.png";

class Index extends Component{
    render() {
        return(
            <div className="index">
                <Header />
                <img className="index_banner" alt="banner" src= {Banner}/>
            </div>
        )
    }
}
export default Index;