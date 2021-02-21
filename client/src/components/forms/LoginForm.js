import React from 'react'
import {Field, reduxForm} from "redux-form";
import {REGISTRATION_PAGE} from "../../utils/consts";
import {Link} from "react-router-dom";
import CustomInput from "../../customComponents/inputs/CustomInput";

class LoginForm extends React.Component {

    renderError(meta) {

    }

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.onSubmit(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <CustomInput
                    name="usernameOrEmail"
                    type="text"
                    renderError={this.renderError}
                    label="Enter User Name or Email"/>
                <CustomInput
                    name="password"
                    type="text"
                    renderError={this.renderError}
                    label="Enter Password"/>
                <button className="ui button primary">
                    Login
                </button>
                <Link to={REGISTRATION_PAGE}>Register</Link>
            </form>
        );
    }
}

const validation = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'loginForm',
    validation
})(LoginForm);

export default formWrapper;