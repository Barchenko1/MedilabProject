import React from 'react'
import {reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../utils/consts";
import CustomRadioButton from "../../customComponents/radioButtons/CustomRadioButton";
import CustomInput from "../../customComponents/inputs/CustomInput";
import "./Form.scss";


class RegistrationForm extends React.Component {

    renderError(meta) {
        if (meta.touched && meta.error) {
            return(
                <div className='errormsg'>
                    {meta.error}
                </div>
            )
        }
    };

    renderGenderSelectionRadioButtons() {
        return(
            <div className="role">
                <label className="role_label">Role</label>
                <div>
                    <CustomRadioButton name="role" className="role_btn" caption="Customer" radioButtonValue="role_customer" renderError={this.renderError}/>
                    <CustomRadioButton name="role" className="role_btn" caption="Individual" radioButtonValue="role_individual" renderError={this.renderError}/>
                </div>
            </div>
        )
    }

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.onSubmit(formProps);
    }

    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <CustomInput 
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    type="text"
                    name="username"
                    renderError={this.renderError}
                    label="User Name"/>
                <CustomInput
                    className="form_item"
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    type="text"
                    name="email"
                    renderError={this.renderError}
                    label="Email"/>
                <CustomInput
                    className="form_item"
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Phone number"/>
                <CustomInput
                    className="form_item"
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    type="password"
                    name="password"
                    renderError={this.renderError}
                    label="Password"/>
                <CustomInput
                    className="form_item"
                    groupStyle="form_item"
                    labelStyle='form_label'
                    inputStyle='form_input'
                    type="password"
                    name="confirmPassword"
                    renderError={this.renderError}
                    label="Confirm Password"/>
                {this.renderGenderSelectionRadioButtons()}
                <div className="form_buttons">
                <button className="form_buttons-submit">
                    Register
                </button>
                <Link to={LOGIN_PAGE} className="form_buttons-link">Cancel</Link>
                </div>
            </form>
        );
    }


}

const validate = (formProps) => {
    const errors = {};
    console.log(formProps)
    if (!formProps.username) {
        errors.username = 'You must enter a username';
    }
    if (!formProps.email) {
        errors.email = 'You must enter a email';
    }
    if (!formProps.phone) {
        errors.phone = 'You must enter a phone';
    }
    if (!formProps.password) {
        errors.password = 'You must enter a password';
    }
    if (!formProps.confirmPassword) {
        errors.confirmPassword = 'You must enter a confirmPassword';
    }
    if (formProps.password !== formProps.confirmPassword) {
        errors.confirmPassword = 'Please, confirm your password';
    }
    if (!formProps.role) {
        errors.role = 'You must select a role';
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'registrationForm',
    validate
})(RegistrationForm);

export default formWrapper;