import React from 'react';
import Modal from "../modals/Modal";
import history from "../../utils/history";
import EmployeeForm from "../forms/EmployeeForm";
import {connect} from 'react-redux';
import {editEmployee, getEmployee} from "../../actions/employeeActions";
import _ from 'lodash';

class EmployeeEdit extends React.Component {

    onSubmit = (formProps) => {
        this.props.editEmployee(this.props.quote.quoteId, formProps, this.props.match.params.id);
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
            'hoursOfWork',
            'salary',
            'dependents'));
        return(
            <div>
                EmployeeEdit
                <Modal
                    header="Edit employee"
                    onDismiss={() => history.push(`/${this.props.quote.quoteId}/employees`)}
                >
                    <EmployeeForm
                        initialValues={_.pick(
                            this.props.employee,
                            'firstName',
                            'middleName',
                            'lastName',
                            'age',
                            'birthdate',
                            'gender',
                            'email',
                            'dateOfHire',
                            'hoursOfWork',
                            'salary',
                            'dependents')}
                        onSubmit={this.onSubmit}
                        to={`/${this.props.quote.quoteId}/employees`}
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
        employee: state.employeeReducer.employees.find(employee => employee.employeeId == ownProps.match.params.id),
        quote: state.quoteReducer.quote
    }
}



export default connect(
    mapStateToProps,
    { getEmployee, editEmployee }
)(EmployeeEdit);