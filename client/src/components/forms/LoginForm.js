import React from 'react'
import {Field, reduxForm} from "redux-form";
import {REGISTRATION_PAGE} from "../../utils/consts";
import {Link} from "react-router-dom";
import CustomInput from "../../customComponents/inputs/CustomInput";
import './Form.scss'

class LoginForm extends React.Component {

    renderError(meta) {
        if (meta.touched && meta.error) {
            return(
                <div className="errormsg">
                    {meta.error}
                </div>
            )
        }
    }

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.onSubmit(formProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
                <CustomInput
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    name="usernameOrEmail"
                    type="text"
                    renderError={this.renderError}
                    label="Enter User Name or Email"/>
                <CustomInput
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    name="password"
                    type="password"
                    renderError={this.renderError}
                    label="Enter Password"/>
                <div className="form_buttons">
                    <button className="form_buttons-submit">
                        Login
                    </button>
                    <Link to={REGISTRATION_PAGE} className="form_buttons-link">Register</Link>
                </div>
            </form>
        );
    }
}

const validate = (formProps) => {
    const errors = {};
    if (!formProps.usernameOrEmail) {
        errors.usernameOrEmail = 'You must enter a username or email';
    }

    if (!formProps.password) {
        errors.password = 'You must enter password';
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);

export default formWrapper;