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
        console.log(this.props.quote.quoteId)
        this.props.createEmployee(this.props.quote.quoteId, formProps);
    }

    render() {
        return(
            <div>
                <Modal
                    header="Create new employee"
                    onDismiss={() => history.push(`/${this.props.quote.quoteId}/employees`)}
                >
                    <EmployeeForm
                        onSubmit={this.onSubmit}
                        to={`/${this.props.quote.quoteId}/employees`}
                        submitButton='Create'
                        cancelButton='Cancel'
                    />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quote: state.quoteReducer.quote
    }
}

export default connect(
    mapStateToProps,
    {createEmployee})
(EmployeeCreate);