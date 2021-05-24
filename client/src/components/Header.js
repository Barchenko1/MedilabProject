import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import history from "../utils/history";

const Header = () => {

    function onChange(e) {
        history.push(`${e.target.value}`);
    }

    return(
        <div className="header">
            <div className="header_logo">
                <Link to="/">
                    <img src="logo.png" className="header_logo--img"/>
                </Link>
            </div>
            <div className="header_wrapper">
                <div className="header_avatar"/>
                <div style={{textAlign: 'right'}}>
                    <select onClick={onChange} className="header_dropdown">
                        <option value="/quote/new">Create Quote</option>
                        <option value="/user-profile">  User Profile</option>
                        <option value="/"> Log out</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header;