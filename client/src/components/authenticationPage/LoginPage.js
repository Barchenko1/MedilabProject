import React from 'react';
import LoginForm from "../forms/LoginForm";
import {connect} from 'react-redux';
import {signIn} from "../../actions/authActions";
import "../PagesHeader.scss";

class LoginPage extends React.Component {

    onSubmit = (formProps) => {
        this.props.signIn(formProps);
    }

    render() {
        return (
            <div>
                <h3 className="page_header">Login</h3>
                <LoginForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, {signIn})(LoginPage);