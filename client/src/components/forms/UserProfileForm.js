import React from 'react';
import {reduxForm} from "redux-form";

class UserProfileForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {this.renderCompanyInfo()}

                <button className="ui button primary">
                    Continue
                </button>
            </form>
        )
    }
}

const validate = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'companyProfileForm',
    validate
})(UserProfileForm);

export default formWrapper;