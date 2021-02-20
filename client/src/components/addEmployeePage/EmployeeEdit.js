import React from 'react';
import Modal from "../modals/Modal";
import history from "../../utils/history";
import EmployeeForm from "./EmployeeForm";
import {connect} from 'react-redux';
import {editEmployee, getEmployee} from "../../actions/employeeActions";
import _ from 'lodash';

class EmployeeEdit extends React.Component{

    onSubmit = (formProps) => {
        this.props.editEmployee(this.props.match.params.id, formProps);
    }

    render() {
        console.log(_.pick(
            this.props.employee,
            'firstName',
            'lastName',
            'age',
            'birthdate',
            'gender',
            'email',
            'dateOfHire',
            'hoursWorked',
            'salary',
            'dependents'))
        return(
            <div>
                EmployeeEdit
                <Modal
                    header="Edit employee"
                    onDismiss={() => history.push('/employees')}
                >
                    <EmployeeForm
                        initialValues={_.pick(
                            this.props.employee,
                            'firstName',
                            'lastName',
                            'age',
                            'birthdate',
                            'gender',
                            'email',
                            'dateOfHire',
                            'hoursWorked',
                            'salary',
                            'dependents')}
                        onSubmit={this.onSubmit}
                        submitButton='Edit'
                        cancelButton='Cancel'
                    />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // employee: state.employeeReducer[ownProps.match.params.id]
        employee: state.employeeReducer.employees.find(employee => employee.id == ownProps.match.params.id)
    }
}

export default connect(
    mapStateToProps,
    { getEmployee, editEmployee }
)(EmployeeEdit);