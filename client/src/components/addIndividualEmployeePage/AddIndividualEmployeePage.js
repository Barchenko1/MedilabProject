import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from "../forms/EmployeeForm";

class AddIndividualEmployeePage extends React.Component {

    onSubmit = (formProps) => {

    }

    render() {
        return (
            <div className="ui form error">
                <EmployeeForm
                    onSubmit={this.onSubmit}
                    to="/employees"
                    submitButton='Continue'
                    cancelButton='Previous'
                />
            </div>
        );
    }
}

export default connect(null, {})(AddIndividualEmployeePage);