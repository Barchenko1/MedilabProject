import React from 'react';
import {connect} from "react-redux";
import {createEmployee} from "../../actions/employeeActions";
import EmployeeForm from "../forms/EmployeeForm";

class IndividualAddDetailsPage extends React.Component {

    onSubmit = formProps => {
        console.log(formProps);
        console.log(this.props.quote.quoteId);
    }

    render() {
        return(
            <div>
                {/*<IndividualAddDetailsForm*/}
                {/*    onSubmit={this.onSubmit}*/}
                {/*    to="/add-individual"*/}
                {/*    submitButton='Create'*/}
                {/*    cancelButton='Cancel'*/}
                {/*/>*/}
                <EmployeeForm
                    onSubmit={this.onSubmit}
                    to="/add-individual"
                    submitButton='Create'
                    cancelButton='Cancel'
                />
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
(IndividualAddDetailsPage);
