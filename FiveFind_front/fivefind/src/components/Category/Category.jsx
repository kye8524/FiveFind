import React, {Component} from "react"
import {Link, Route, withRouter} from 'react-router-dom';

class Category extends Component{
    render() {
        return(
            <div className="category">
                <ul className="category_box">
                    <li className="category_text">전체</li>
                    <li className="category_text">코딩</li>
                    <li className="category_text">어쩌구</li>
                </ul>
            </div>
        )
    }
}

export default Category;