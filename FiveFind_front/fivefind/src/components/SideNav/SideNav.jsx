import React, {Component} from "react"
import "./SideNav.css"
import {Link} from "react-router-dom";

class SideNav extends Component{
    render() {
        return(
                <div className="pageNav">
                    <div className="pageNav-category">
                        <Link to='/mypage'><div className="pageNav-category-text">회원정보</div></Link>
                    </div>
                </div>
        )
    }
}

export default SideNav;