import React from "react";
import {connect} from 'react-redux';
import {getEmployees, deleteEmployee} from "../../actions/employeeActions";
import {Link} from "react-router-dom";
import CustomButton from "../../customComponents/buttons/CustomButton";
import './EmployeeList.scss';
import {COMPANY_PROFILE_PAGE, PLAN_SELECTION_PAGE} from "../../utils/consts";

class EmployeeList extends React.Component {

    componentDidMount() {
        this.props.getEmployees(this.props.quote.quoteId);
    }

    renderEmployees() {
        console.log(this.props.employees)
        return this.props.employees.map((employee, index) => {
            return(
                <div className="item" key={index}>
                    {this.renderActions(employee)}
                    <div className="content">
                        EE name: {employee.firstName}, EE last name: {employee.lastName}, EE birthdate: {new Date(employee.birthdate).toLocaleDateString()}, EE email: {employee.email}, EE hours of work: {employee.hoursOfWork}, EE salary {employee.salary}
                    </div>
                </div>
            )
        });
    }

    renderActions(employee) {
        return(
            <div className="right floated content">
                <Link to={`/${this.props.quote.quoteId}/employee/edit/${employee.employeeId}`} className="ui button primary">
                    EDIT
                </Link>
                <button onClick={() => this.props.deleteEmployee(this.props.quote.quoteId, employee.employeeId)} className="ui button negative">
                    DELETE
                </button>
            </div>
        )
    }

    renderCreate() {
        let toLink = `/${this.props.quote.quoteId}/employee/new`
        return(
            <div className='buttonLeft'>
                <Link to={toLink} className="ui button primary" >
                    Create Employee
                </Link>
            </div>
        )
    }

    render() {
        return(
            <div className='center'>
                <h2 className="page_header">AddEmployeePage</h2>
                <div className='wrapper'>
                    {this.renderCreate()}
                    <div className="ui celled list addheight">
                        {this.renderEmployees()}
                    </div>
                    <div className="buttonContainer">
                        <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={`/${this.props.quote.quoteId}/company-profile/`}/>
                        <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={PLAN_SELECTION_PAGE}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employeeReducer.employees,
        quote: state.quoteReducer.quote
    }
}

export default connect(
    mapStateToProps,
    {getEmployees, deleteEmployee})
(EmployeeList);