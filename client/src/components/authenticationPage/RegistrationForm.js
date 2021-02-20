import React from 'react'
import {reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../utils/consts";
import CustomRadioButton from "../../customComponents/radioButtons/CustomRadioButton";
import CustomInput from "../../customComponents/inputs/CustomInput";


class RegistrationForm extends React.Component {

    renderError(meta) {

    }

    renderGenderSelectionRadioButtons() {
        return(
            <div>
                <label>Gender</label>
                <div>
                    <CustomRadioButton name="gender" caption="Male" radioButtonValue="male" renderError={this.renderError}/>
                    <CustomRadioButton name="gender" caption="Female" radioButtonValue="female" renderError={this.renderError}/>
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
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <CustomInput
                    type="text"
                    name="fistName"
                    renderError={this.renderError}
                    label="First name"/>
                <CustomInput
                    type="text"
                    name="lastName"
                    renderError={this.renderError}
                    label="Last name"/>
                <CustomInput
                    type="date"
                    name="birthDate"
                    renderError={this.renderError}
                    label="Date of Birth"/>
                {this.renderGenderSelectionRadioButtons()}
                <CustomInput
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Phone number"/>
                <CustomInput
                    type="text"
                    name="login"
                    renderError={this.renderError}
                    label="Login"/>
                <CustomInput
                    type="text"
                    name="email"
                    renderError={this.renderError}
                    label="Email"/>
                <CustomInput
                    type="password"
                    name="password"
                    renderError={this.renderError}
                    label="Password"/>
                <CustomInput
                    type="password"
                    name="confirmPassword"
                    renderError={this.renderError}
                    label="Confirm Password"/>
                <button className="ui button primary">
                    Register
                </button>
                <Link to={LOGIN_PAGE}>Cancel</Link>
            </form>
        );
    }


}

const validation = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'registrationForm',
    validation
})(RegistrationForm);

export default formWrapper;