import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from "../../actions/employeeActions";
import Modal from "../modals/Modal";
import EmployeeForm from "../forms/EmployeeForm";
import history from "../../utils/history";
import _ from "lodash";

class EmployeeCreate extends React.Component {

    onSubmit = formProps => {
        console.log(formProps)
        this.props.createEmployee(formProps);
    }

    render() {
        return(
            <div>
                <Modal
                    header="Create new employee"
                    onDismiss={() => history.push('/employees')}
                >
                    <EmployeeForm
                        onSubmit={this.onSubmit}
                        to="/employees"
                        submitButton='Create'
                        cancelButton='Cancel'
                    />
                </Modal>
            </div>
        )
    }
}

export default connect(
    null,
    {createEmployee})
(EmployeeCreate);