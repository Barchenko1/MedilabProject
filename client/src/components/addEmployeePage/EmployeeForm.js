import React from 'react';
import { Field, FieldArray, reduxForm } from "redux-form";
import './EmployeeForm.css'
import {Link} from "react-router-dom";

class EmployeeForm extends React.Component {

    genders = [
        'male',
        'female'
    ];

    relationships = [
        'spouse',
        'child'
    ]

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    }

    renderDropDown = (formProps) => {
        return(
            <div>
                <label>{formProps.label}</label>
                <select {...formProps.input}>
                    <option value=""/>
                    {formProps.data.map(data =>
                        <option value={data} key={data}>{data}</option>)}
                </select>
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    renderInput = (formProps) => {
        return(
            <div>
                <label>{formProps.label}</label>
                <input
                    type={formProps.type}
                    onChange={formProps.input.onChange}
                    value={formProps.input.value}
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    renderDependentSection = ({ fields, meta: { touched, error, submitFailed } }) => {
        return(
            <ul>
                <li>
                    <button type="button" onClick={() => fields.push({})}>
                        Add Dependent
                    </button>
                    {submitFailed && error && <span>{error}</span>}
                </li>
                {fields.map((dependent, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove Member"
                            onClick={() => fields.remove(index)}
                        >Remove this dependent</button>
                        <h4>Dependent #{index + 1}</h4>
                        <Field
                            name={`${dependent}.firstName`}
                            type="text"
                            component={this.renderInput}
                            label="First Name"
                        />
                        <Field
                            name={`${dependent}.lastName`}
                            type="text"
                            component={this.renderInput}
                            label="Last Name"
                        />
                        <Field
                            name={`${dependent}.birthdate`}
                            type='date'
                            component={this.renderInput}
                            label="Birth date"
                        />
                        <Field
                            name={`${dependent}.age`}
                            type="number"
                            component={this.renderInput}
                            label="Age"
                        />
                        <Field
                            name={`${dependent}.gender`}
                            component={this.renderDropDown}
                            data={this.genders}
                            label="Gender"
                        />
                        <Field
                            name={`${dependent}.relationship`}
                            component={this.renderDropDown}
                            data={this.relationships}
                            label="Relationship"
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
                <Field
                    name='firstName'
                    type='text'
                    component={this.renderInput}
                    label="First Name"
                />
                <Field name='lastName'
                       type='text'
                       component={this.renderInput}
                       label="Last Name"
                />
                <Field
                    name='birthdate'
                    type='date'
                    component={this.renderInput}
                    label="Birth date"
                />
                <Field name='age'
                       type='number'
                       component={this.renderInput}
                       label="Age"
                />
                <Field
                    name='gender'
                    component={this.renderDropDown}
                    data={this.genders}
                    label="Gender"
                />
                <Field name='email'
                       type='email'
                       component={this.renderInput}
                       label="Email"
                />
                <Field
                    name='dateOfHire'
                    type='date'
                    component={this.renderInput}
                    label="Date of hire"
                />
                <Field name='hoursWorked'
                       type='number'
                       component={this.renderInput}
                       label="Hours worked"
                />
                <Field name='salary'
                       type='number'
                       component={this.renderInput}
                       label="Salary"
                />
                <FieldArray
                    name='dependents'
                    component={this.renderDependentSection}
                />
                <div className="modal-container">
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