import React from "react";
import {connect} from 'react-redux';
import {getEmployees, deleteEmployee} from "../../actions/employeeActions";
import {Link} from "react-router-dom";
import CustomButton from "../../customComponents/buttons/CustomButton";
import './EmployeeList.css'
import {COMPANY_PROFILE_PAGE, PLAN_SELECTION_PAGE} from "../../utils/consts";

class EmployeeList extends React.Component {

    componentDidMount() {
        this.props.getEmployees();
    }

    renderEmployees() {
        return this.props.employees.map((employee, index) => {
            return(
                <div className="item" key={index}>
                    {this.renderActions(employee)}
                    <div className="content">
                        {employee.firstName} {employee.lastName} {employee.age}
                    </div>
                </div>
            )
        });
    }

    renderActions(employee) {
        return(
            <div className="right floated content">
                <Link to={`/employee/edit/${employee.id}`} className="ui button primary">
                    EDIT
                </Link>
                <button onClick={() => this.props.deleteEmployee(employee.id)} className="ui button negative">
                    DELETE
                </button>
            </div>
        )
    }

    renderCreate() {
        return(
            <div style={{textAlign: 'left'}}>
                <Link to="/employee/new" className="ui button primary" >
                    Create Employee
                </Link>
            </div>
        )
    }

    render() {
        return(
            <div>
                <h2>AddEmployeePage</h2>
                {this.renderCreate()}
                <div className="ui celled list">
                    {this.renderEmployees()}
                </div>
                <div className="buttonContainer">
                    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={COMPANY_PROFILE_PAGE}/>
                    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={PLAN_SELECTION_PAGE}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employeeReducer.employees
    }
}

export default connect(
    mapStateToProps,
    {getEmployees,deleteEmployee})
(EmployeeList);