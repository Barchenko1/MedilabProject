import React from 'react';
import RegistrationForm from "../forms/RegistrationForm";
import {connect} from 'react-redux';
import {registration} from '../../actions/authActions';
import "../PagesHeader.scss";

class RegistrationPage extends React.Component {

    onSubmit = (formProps) => {
        this.props.registration(formProps);
    }

    render() {
        return (
            <div>
                <h3 className="page_header">Registration</h3>
                <RegistrationForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {registration})(RegistrationPage);