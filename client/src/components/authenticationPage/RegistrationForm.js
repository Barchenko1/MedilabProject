import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../utils/consts";
import RadioButton from "../../customComponents/radioButtons/CustomRadioButton";


class RegistrationForm extends React.Component {
    renderError(meta) {

    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input
                    type={formProps.type}
                    onChange={formProps.input.onChange}
                    value={formProps.input.value} autoComplete="off"
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    renderGenderSelectionRadioButtons() {
        return(
            <div>
                <label>Gender</label>
                <div>
                    <RadioButton name="gender" caption="Male" radioButtonValue="male"/>
                    <RadioButton name="gender" caption="Female" radioButtonValue="female"/>
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
                <Field
                    type="text"
                    name="fistName"
                    component={this.renderInput}
                    label="First name"/>
                <Field
                    type="text"
                    name="lastName"
                    component={this.renderInput}
                    label="Last name"/>
                <Field
                    type="date"
                    name="birthDate"
                    component={this.renderInput}
                    label="Date of Birth"/>
                {/*<Field*/}
                {/*    type="radio"*/}
                {/*    name="gender"*/}
                {/*    component={this.renderRadioButton}*/}
                {/*    label="Gender"/>*/}
                {this.renderGenderSelectionRadioButtons()}
                <Field
                    type="text"
                    name="phone"
                    component={this.renderInput}
                    label="Phone number"/>
                <Field
                    type="text"
                    name="login"
                    component={this.renderInput}
                    label="Login"/>
                <Field
                    type="text"
                    name="email"
                    component={this.renderInput}
                    label="Email"/>
                <Field
                    type="password"
                    name="password"
                    component={this.renderInput}
                    label="Password"/>
                <Field
                    type="password"
                    name="confirmPassword"
                    component={this.renderInput}
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