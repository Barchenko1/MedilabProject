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
        return(
            <div className="profile">
                <div className="profile_card">
                    <div className="profile_card-item">Company name:</div>
                    <div className="profile_card-item">Company phone:</div>
                    <div className="profile_card-item">Company email:</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">Company house:</div>
                    <div className="profile_card-item">Company street:</div>
                    <div className="profile_card-item">Company city:</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">Company state:</div>
                    <div className="profile_card-item">Company zipCode:</div>
                    <div className="profile_card-item">Organization type:</div>
                </div>
                <button className="profile_button">Edit</button>
            </div>
        )
    }

    renderEmployeeDetailsOverview() {
        console.log(this.props.employees)
        return (
            <div className="profile">
                {this.renderEmployeeDetails()}
                <button className="profile_button">Edit</button>
            </div>
        )
    }

    renderEmployeeDetails() {
        return this.props.employees.map((employee, index) => {
            return (
                <div className="profile_card">
                    Employee:
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
                    Dependent:
                    <div className="profile_card-item">{dependent.firstName}</div>
                    <div className="profile_card-item">{dependent.lastName}</div>
                    <div className="profile_card-item">{dependent.birthdate}</div>
                    <div className="profile_card-item">{dependent.gender}</div>
                    <div className="profile_card-item">{dependent.relationship}</div>
                </div>
            )
        });
    }

    renderPlanDetailsOverview() {
        return(
            <div className="profile">
                <div className="profile_card">
                    <div className="profile_card-item">Username</div>
                    <div className="profile_card-item">Email</div>
                    <div className="profile_card-item">Phone number</div>
                    <div className="profile_card-item">qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">Username</div>
                    <div className="profile_card-item">Email</div>
                    <div className="profile_card-item">Phone number</div>
                    <div className="profile_card-item">qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">Username</div>
                    <div className="profile_card-item">Email</div>
                    <div className="profile_card-item">Phone number</div>
                    <div className="profile_card-item">qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">Username</div>
                    <div className="profile_card-item">Email</div>
                    <div className="profile_card-item">Phone number</div>
                    <div className="profile_card-item">qwewqe</div>
                </div>
                <button className="profile_button">Edit</button>
            </div>
        )
    }

    render() {
        return (
            <div className='center'>
                {this.renderCompanyProfileOverview()}
                {this.renderEmployeeDetailsOverview()}
                {this.renderPlanDetailsOverview()}
                {/* <div className="buttonContainer">*/}
                {/*    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={PLAN_SELECTION_PAGE}/>*/}
                {/*    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={`${this.props.quote.quoteId}/quote-overview`}/>*/}
                {/*</div>*/}
                <div>
                    <div className="buttonContainer">
                        <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={PLAN_SELECTION_PAGE}/>
                        <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={`${this.props.quote.quoteId}/quote-overview`}/>
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
        employees: state.quoteOverviewReducer.employees
    }
}

export default connect(mapStateToProps, {getCompanyOverview, getEmployeesOverview, getPlanOverview})(QuoteOverviewPage);