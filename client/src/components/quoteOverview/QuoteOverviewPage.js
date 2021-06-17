import React from "react";
import {connect} from 'react-redux';
import CustomButton from "../../customComponents/buttons/CustomButton";
import {PLAN_SELECTION_PAGE} from "../../utils/consts";
import {getCompanyOverview, getEmployeesOverview, getPlanOverview} from "../../actions/quoteOverviewActions";
import {HOME_PAGE} from '../../utils/consts';

class QuoteOverviewPage extends React.Component {

    componentDidMount() {
        this.props.getCompanyOverview(this.props.quote.quoteId);
        this.props.getEmployeesOverview(this.props.quote.quoteId);
        this.props.getPlanOverview(this.props.quote.quoteId);
    }

    renderCompanyProfileOverview() {
        console.log(this.props.company);
        if (!this.props.company) {
            return <div/>
        } else {
            return(
                <div className="profile">
                    <div className="profile_card">
                        <div className="profile_card-item">Company name: {this.props.company.companyName}</div>
                        <div className="profile_card-item">Company phone: {this.props.company.contactPhone}</div>
                        <div className="profile_card-item">Company email: {this.props.company.contactEmail}</div>
                        <div className="profile_card-item">Company house: {this.props.company.houseNumber}</div>
                        <div className="profile_card-item">Company street: {this.props.company.street}</div>
                        <div className="profile_card-item">Company city: {this.props.company.city}</div>
                        <div className="profile_card-item">Company state: {this.props.company.state}</div>
                        <div className="profile_card-item">Company zipCode: {this.props.company.zipCode}</div>
                        <div className="profile_card-item">Organization type: {this.props.company.organizationType}</div>
                    </div>
                    <button className="profile_button">Edit</button>
                </div>
            )
        }
    }

    renderEmployeeDetailsOverview() {
        console.log(this.props.employees)
        if (this.props.employees.length === 0) {
            return <div/>
        } else {
            return (
                <div className="profile">
                    {this.renderEmployeeDetails()}
                    <button className="profile_button">Edit</button>
                </div>
            )
        }
    }

    renderEmployeeDetails() {
        return this.props.employees.map((employee, index) => {
            return (
                <div className="profile_card">
                    Employee{index+1}:
                    <div className="profile_card-item">{employee.firstName}</div>
                    <div className="profile_card-item">{employee.middleName}</div>
                    <div className="profile_card-item">{employee.lastName}</div>
                    <div className="profile_card-item">{employee.email}</div>
                    <div className="profile_card-item">{employee.birthdate}</div>
                    <div className="profile_card-item">{employee.dateOfHire}</div>
                    <div className="profile_card-item">{employee.hoursOfWork}</div>
                    <div className="profile_card-item">{employee.salary}</div>
                    <div className="profile_card-item">{employee.gender}</div>
                    {this.renderDependentDetails(employee.dependents)}
                </div>
            )
        });
    }

    renderDependentDetails(dependents) {
        return dependents.map((dependent, index) => {
            return (
                <div className="profile_card">
                    Dependent{index+1}:
                    <div className="profile_card-item">{dependent.firstName}</div>
                    <div className="profile_card-item">{dependent.lastName}</div>
                    <div className="profile_card-item">{dependent.birthdate}</div>
                    <div className="profile_card-item">{dependent.gender}</div>
                    <div className="profile_card-item">{dependent.relationship}</div>
                </div>
            )
        });
    }

    renderPlanDetails() {
        return this.props.plans.map((plan, index) => {
            return (
                <div className="profile_card">
                    Plan{index+1}:
                    <div className="profile_card-item">{plan.planName}</div>
                    <div className="profile_card-item">{plan.planCode}</div>
                    <div className="profile_card-item">{plan.totalMonthlyCost}</div>
                    <div className="profile_card-item">{plan.deductible}</div>
                    <div className="profile_card-item">{plan.planClass}</div>
                    <div className="profile_card-item">{plan.metalTier}</div>
                    <div className="profile_card-item">{plan.planType}</div>
                </div>
            )
        });
    }

    renderPlanDetailsOverview() {
        console.log(this.props.plans)
        if (this.props.employees.length === 0) {
            return <div/>
        } else {
            return (
                <div className="profile">
                    {this.renderPlanDetails()}
                    <button className="profile_button">Edit</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='center'>
                {this.renderCompanyProfileOverview()}
                {this.renderEmployeeDetailsOverview()}
                {this.renderPlanDetailsOverview()}
                <div>
                    <div className="buttonContainer">
                        <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={PLAN_SELECTION_PAGE}/>
                        <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={HOME_PAGE}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quote: state.quoteReducer.quote,
        company: state.quoteOverviewReducer.company,
        employees: state.quoteOverviewReducer.employees,
        plans: state.quoteOverviewReducer.plans
    }
}

export default connect(mapStateToProps, {getCompanyOverview, getEmployeesOverview, getPlanOverview})(QuoteOverviewPage);