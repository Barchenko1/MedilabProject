import React from "react";
import {FieldArray, reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";

class QuoteForm extends React.Component {

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    }

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <CustomInput
                    name='quoteName'
                    type='text'
                    renderError={this.renderError}
                    label="Quote Name"
                />
                <CustomInput
                    name='effectiveDate'
                    type='text'
                    renderError={this.renderError}
                    label="Effective Date"
                />
                <div className="modal-container">
                    <button>{this.props.submitButton}</button>
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

    return errors;
}

const fromWrapper = reduxForm({
    form: 'quoteForm',
    validate
})(QuoteForm);

export default fromWrapper;