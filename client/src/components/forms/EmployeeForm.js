import React from 'react';
import { Field, FieldArray, reduxForm } from "redux-form";
import '../addEmployeePage/EmployeeForm.css'
import {Link} from "react-router-dom";
import CustomDropDown from "../../customComponents/dropdowns/CustomDropDown";
import CustomInput from "../../customComponents/inputs/CustomInput";

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
                        <CustomInput
                            name={`${dependent}.firstName`}
                            type="text"
                            renderError={this.renderError}
                            label="First Name"
                        />
                        <CustomInput
                            name={`${dependent}.lastName`}
                            type="text"
                            renderError={this.renderError}
                            label="Last Name"
                        />
                        <CustomInput
                            name={`${dependent}.birthdate`}
                            type='date'
                            renderError={this.renderError}
                            label="Birth date"
                        />
                        <CustomInput
                            name={`${dependent}.age`}
                            type="number"
                            renderError={this.renderError}
                            label="Age"
                        />
                        <CustomDropDown
                            name={`${dependent}.gender`}
                            data={this.genders}
                            label="Gender"
                            renderError={this.renderError}
                        />
                        <CustomDropDown
                            name={`${dependent}.relationship`}
                            data={this.relationships}
                            label="Relationship"
                            renderError={this.renderError}
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
                <CustomInput
                    name='firstName'
                    type='text'
                    renderError={this.renderError}
                    label="First Name"
                />
                <CustomInput
                    name='lastName'
                    type='text'
                    renderError={this.renderError}
                    label="Last Name"
                />
                <CustomInput
                    name='birthdate'
                    type='date'
                    renderError={this.renderError}
                    label="Birth date"
                />
                <CustomInput
                    name='age'
                    type='number'
                    renderError={this.renderError}
                    label="Age"
                />
                <CustomDropDown
                    name="gender"
                    data={this.genders}
                    label="Gender"
                    renderError={this.renderError}
                />
                <CustomInput
                    name='email'
                    type='email'
                    renderError={this.renderError}
                    label="Email"
                />
                <CustomInput
                    name='dateOfHire'
                    type='date'
                    renderError={this.renderError}
                    label="Date of hire"
                />
                <CustomInput
                    name='hoursWorked'
                    type='number'
                    renderError={this.renderError}
                    label="Hours worked"
                />
                <CustomInput
                    name='salary'
                    type='number'
                    renderError={this.renderError}
                    label="Salary"
                />
                <FieldArray
                    name='dependents'
                    component={this.renderDependentSection}
                />
                <div className="modal-container">
                    <button>{this.props.submitButton}</button>
                    <Link to={this.props.to}>{this.props.cancelButton}</Link>
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