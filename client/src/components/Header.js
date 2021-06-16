import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import history from "../utils/history";
import {connect} from "react-redux";
import {signOut} from "../actions/authActions";
import {HOME_PAGE, LOGIN_PAGE} from "../utils/consts";

const Header = (props) => {

    function onChange(e) {
        if (`${e.target.value}` === '/') {
            props.signOut();
        }
        history.push(`${e.target.value}`);
    }

    return(
        <div className="header">
            <div className="header_logo">
                <Link to="/medilab">
                    <img src="logo.png" className="header_logo--img"/>
                </Link>
            </div>
            <div className="header_wrapper">
                <div className="header_avatar"/>
                <div style={{textAlign: 'right'}}>
                    <select onClick={onChange} className="header_dropdown">
                        <option value="/quote/new">Create Quote</option>
                        <option value="/user-profile">  User Profile</option>
                        <option value={LOGIN_PAGE}> Log out</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {signOut})(Header);
