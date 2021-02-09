import React from 'react';
import { Field, FieldArray, reduxForm } from "redux-form";
import './EmployeeForm.css'
import {Link} from "react-router-dom";
import DependentDetails from "./addDependents/DependentDetails";


class EmployeeForm extends React.Component {

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

    addDependentOnClick(fields) {
        return () => fields.push({})
    }

    renderDependentSection = ({ fields, meta: { touched, error, submitFailed } }) => {
        console.log(this.props)
        console.log(fields)

        return(
            <ul>
                <li>
                    <button type="button" onClick={() => fields.push({})}>
                        Add Member
                    </button>
                    {submitFailed && error && <span>{error}</span>}
                </li>
                {fields.map((member, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove Member"
                            onClick={() => fields.remove(index)}
                        >Remove</button>
                        <h4>Member #{index + 1}</h4>
                        <Field
                            name={`${member}.firstName`}
                            type="text"
                            component={this.renderInput}
                            label="First Name"
                        />
                        <Field
                            name={`${member}.lastName`}
                            type="text"
                            component={this.renderInput}
                            label="Last Name"
                        />
                    </li>
                ))}
            </ul>
        )
    }

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='firstName' component={this.renderInput} label="First Name"/>
                <Field name='lastName' component={this.renderInput} label="Last Name"/>
                <Field name='age' component={this.renderInput} label="Age"/>
                <FieldArray name='dependents' component={this.renderDependentSection}/>
                <div className="myModal">
                    <button>{this.props.submitButton}</button>
                    <Link to='/employees'>{this.props.cancelButton}</Link>
                </div>
            </form>
        )
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
    form: 'employeeForm',
    validate
})(EmployeeForm);

export default fromWrapper;