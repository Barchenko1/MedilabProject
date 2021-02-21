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
                <label>Role</label>
                <div>
                    <CustomRadioButton name="role" caption="Customer" radioButtonValue="customer" renderError={this.renderError}/>
                    <CustomRadioButton name="role" caption="Individual" radioButtonValue="individual" renderError={this.renderError}/>
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
                    name="username"
                    renderError={this.renderError}
                    label="User Name"/>
                <CustomInput
                    type="text"
                    name="email"
                    renderError={this.renderError}
                    label="Email"/>
                <CustomInput
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Phone number"/>
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
                {this.renderGenderSelectionRadioButtons()}
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