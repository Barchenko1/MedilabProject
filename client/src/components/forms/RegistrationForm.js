import React from 'react'
import {reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../utils/consts";
import CustomRadioButton from "../../customComponents/radioButtons/CustomRadioButton";
import CustomInput from "../../customComponents/inputs/CustomInput";
import "./AuthorizationForm.scss";


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
    if (!formProps.username) {
        errors.username = 'You must enter a username';
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'registrationForm',
    validate
})(RegistrationForm);

export default formWrapper;