import React from 'react';
import { Field, FieldArray, reduxForm } from "redux-form";
import '../addEmployeePage/EmployeeForm.scss'
import {Link} from "react-router-dom";
import CustomDropDown from "../../customComponents/dropdowns/CustomDropDown";
import CustomInput from "../../customComponents/inputs/CustomInput";
import '../addIndividualEmployeePage/IndividualAddDetailsPage.scss'

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
                <div className="errormsg">
                    {meta.error}
                </div>
            )
        }
    }

    renderDependentSection = ({ fields, meta: { touched, error, submitFailed } }) => {
        return(
            <ul>
                <li>
                    <button className='add' type="button" onClick={() => fields.push({})}>
                        Add Dependent
                    </button>
                    {submitFailed && error && <span>{error}</span>}
                </li>
                {fields.map((dependent, index) => (
                    <li key={index}>
                        <button
                            className='remove'
                            type="button"
                            title="Remove Member"
                            onClick={() => fields.remove(index)}
                        >Remove this dependent</button>
                        <h4>Dependent #{index + 1}</h4>
                        <div className='wrapper'>
                            <div className='wrapper_left'>
                                <CustomInput
                                    groupStyle="wrapper_left-item"
                                    labelStyle='wrapper_left-label'
                                    inputStyle='wrapper_left-input'
                                    name={`${dependent}.firstName`}
                                    type="text"
                                    renderError={this.renderError}
                                    label="First Name"
                                />
                                <CustomInput
                                    groupStyle="wrapper_left-item"
                                    labelStyle='wrapper_left-label'
                                    inputStyle='wrapper_left-input'
                                    name={`${dependent}.lastName`}
                                    type="text"
                                    renderError={this.renderError}
                                    label="Last Name"
                                />
                                <CustomInput
                                    groupStyle="wrapper_left-item"
                                    labelStyle='wrapper_left-label'
                                    inputStyle='wrapper_left-input'
                                    name={`${dependent}.birthdate`}
                                    type='date'
                                    renderError={this.renderError}
                                    label="Birth date"
                                />
                            </div>

                            <div className='wrapper_right'>
                                <CustomDropDown
                                    groupStyle="wrapper_right-item"
                                    labelStyle='wrapper_right-label'
                                    inputStyle='wrapper_right-input'
                                    selectStyle='wrapper_right-select'
                                    name={`${dependent}.gender`}
                                    data={this.genders}
                                    label="Gender"
                                    renderError={this.renderError}
                                />
                                <CustomDropDown
                                    groupStyle="wrapper_right-item"
                                    labelStyle='wrapper_right-label'
                                    inputStyle='wrapper_right-input'
                                    selectStyle='wrapper_right-select'
                                    name={`${dependent}.relationship`}
                                    data={this.relationships}
                                    label="Relationship"
                                    renderError={this.renderError}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    render() {
        console.log(this.props.initialValues);
        return(
            <div className='center'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className='wrapper'>
                        <div className="wrapper_left">
                            <CustomInput
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name='firstName'
                                type='text'
                                renderError={this.renderError}
                                label="First Name"
                            />
                            <CustomInput
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name='middleName'
                                type='text'
                                renderError={this.renderError}
                                label="Middle Name"
                            />
                            <CustomInput
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name='lastName'
                                type='text'
                                renderError={this.renderError}
                                label="Last Name"
                            />
                            <CustomInput
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name='birthdate'
                                type='date'
                                renderError={this.renderError}
                                label="Birth date"
                            />
                            <CustomDropDown
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name="gender"
                                data={this.genders}
                                label="Gender"
                                renderError={this.renderError}
                            />
                        </div>

                        <div className="wrapper_right">
                            <CustomInput
                                groupStyle="wrapper_right-item"
                                labelStyle='wrapper_right-label'
                                inputStyle='wrapper_right-input'
                                name='email'
                                type='email'
                                renderError={this.renderError}
                                label="Email"
                            />
                            <CustomInput
                                groupStyle="wrapper_right-item"
                                labelStyle='wrapper_right-label'
                                inputStyle='wrapper_right-input'
                                name='dateOfHire'
                                type='date'
                                renderError={this.renderError}
                                label="Date of hire"
                            />
                            <CustomInput
                                groupStyle="wrapper_right-item"
                                labelStyle='wrapper_right-label'
                                inputStyle='wrapper_right-input'
                                name='hoursOfWork'
                                type='number'
                                renderError={this.renderError}
                                label="Hours worked"
                            />
                            <CustomInput
                                groupStyle="wrapper_right-item"
                                labelStyle='wrapper_right-label'
                                inputStyle='wrapper_right-input'
                                name='salary'
                                type='number'
                                renderError={this.renderError}
                                label="Salary"
                            />
                        </div>
                    </div>
                    <FieldArray
                        name='dependents'
                        component={this.renderDependentSection}
                    />
                    <div className='buttons'>
                        <Link className='buttons_cancel' to={this.props.to}>{this.props.cancelButton}</Link>
                        <button className='buttons_create'>{this.props.submitButton}</button>
                    </div>
                </form>
            </div>
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

    if (!formProps.middleName) {
        errors.middleName = 'You must enter a middle name';
    }

    if (new Date(formProps.dateOfHire) > new Date()) {
        errors.dateOfHire = 'You could not be hired in the future';
    }

    if(!formProps.dateOfHire) {
        errors.dateOfHire = 'You should choose your date of hire';
    }

    if (!formProps.salary) {
        errors.salary = 'You must enter salary';
    }

    if (!formProps.hoursOfWork) {
        errors.hoursOfWork = 'You must enter hours of work';
    }

    if (!formProps.gender) {
        errors.gender = 'Choose your gender';
    }

    if (new Date(formProps.birthdate) > new Date()) {
        errors.birthdate = 'You could not be born in the future';
    }

    if(!formProps.birthdate) {
        errors.birthdate = 'You should choose your birthdate';
    }

    return errors;
}

const fromWrapper = reduxForm({
    form: 'employeeForm',
    validate
})(EmployeeForm);

export default fromWrapper;