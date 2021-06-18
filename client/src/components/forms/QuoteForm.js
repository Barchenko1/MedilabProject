import React from "react";
import {reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";

class QuoteForm extends React.Component {

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div className="errormsg">
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
            <div className='center'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className='wrapper'>
                        <div className='wrapper_left'>
                            <CustomInput
                                groupStyle="wrapper_left-item"
                                labelStyle='wrapper_left-label'
                                inputStyle='wrapper_left-input'
                                name='name'
                                type='text'
                                renderError={this.renderError}
                                label="Quote Name"
                            />
                        </div>
                        <div className='wrapper_right'>
                            <CustomInput
                                groupStyle="wrapper_right-item"
                                labelStyle='wrapper_right-label'
                                name='dateOfExpire'
                                type='date'
                                renderError={this.renderError}
                                label="Effective Date"
                            />
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className="buttons_create">{this.props.submitButton}</button>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = (formProps) => {
    const errors = {};
    console.log(formProps)
    if (!formProps.name) {
        errors.name = 'You must enter a first name';
    }

    if (!formProps.dateOfExpire) {
        errors.dateOfExpire = 'You must enter effective date'
    }

    return errors;
}

const fromWrapper = reduxForm({
    form: 'quoteForm',
    validate
})(QuoteForm);

export default fromWrapper;