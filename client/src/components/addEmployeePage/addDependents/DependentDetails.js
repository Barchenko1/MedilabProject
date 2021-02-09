import React from 'react';
import { Field, reduxForm } from "redux-form";


class DependentDetails extends React.Component {

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        return(
            <div>
                <label>{formProps.label}</label>
                <input
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='firstName' component={this.renderInput} label="First Name"/>
                <Field name='lastName' component={this.renderInput} label="Last Name"/>
                <Field name='age' component={this.renderInput} label="Age"/>
            </form>
        );
    }

}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.firstName) {
        errors.firstName = 'You must enter a first name';
    }
    if (!formProps.lastName) {
        errors.lastName = 'You must enter a last name';
    }
    if (!formProps.age) {
        errors.age = 'You must enter an age';
    }
    return errors;
}

const fromWrapper = reduxForm({
    form: 'dependentForm',
    validate
})(DependentDetails);

export default fromWrapper;