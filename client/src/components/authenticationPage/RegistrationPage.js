import React from 'react';
import RegistrationForm from "./RegistrationForm";
import {connect} from 'react-redux';
import {registration} from '../../actions/authActions';

class RegistrationPage extends React.Component {

    onSubmit = (formProps) => {
        this.props.registration(formProps);
    }

    render() {
        return (
            <div>
                <h3>Registration</h3>
                <RegistrationForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {registration})(RegistrationPage);