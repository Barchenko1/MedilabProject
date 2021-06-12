import React from "react";
import CustomInput from "../../customComponents/inputs/CustomInput";
import {reduxForm} from "redux-form";
//not used
class IndividualAddDetailsForm extends React.Component {

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="cp_form">
                <div className="wrapper">
                    <CustomInput
                        name='firstName'
                        type='text'
                        renderError={this.renderError}
                        label="First Name"
                    />
                </div>
                <button className="cp_form-button">
                    Continue
                </button>
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

    return errors;
}

const fromWrapper = reduxForm({
    form: 'individualForm',
    validate
})(IndividualAddDetailsForm);

export default fromWrapper;
