import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from "../../actions/employeeActions";
import Modal from "../modals/Modal";
import EmployeeForm from "./EmployeeForm";
import history from "../../utils/history";
import _ from "lodash";

class EmployeeCreate extends React.Component {


    // renderActions = () => {
    //     return(
    //         <React.Fragment>
    //             <button onClick={() => this.onSubmit()}>Create</button>
    //             <Link to='/employees'>Cancel</Link>
    //         </React.Fragment>
    //     )
    // }



    onSubmit = formProps => {
        const newEmployee = Object.assign(formProps, {uniqueId: _.uniqueId('field_')})
        console.log(newEmployee)
        this.props.createEmployee(newEmployee);
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