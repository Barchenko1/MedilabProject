import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div>
            Header
            <div style={{textAlign: 'right'}}>
                <Link to="/quote/new" className="ui button primary" >
                    Create Quote
                </Link>
                <Link to="/user-profile" className="ui button primary" >
                    User Profile
                </Link>
                <Link to="/" className="ui button primary" >
                    Log out
                </Link>
            </div>
        </div>
    )
}

export default Header;