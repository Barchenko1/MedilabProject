import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, plansFilter} from "../../actions/planActions";
import {filterChain} from "../../utils/util";
import CustomButton from "../../customComponents/buttons/CustomButton";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";

class PlanSelectionList extends React.Component {

    componentDidMount() {

    }

    renderActions(plan) {
        return(
            <div>
                <button onClick={() => this.props.addPlan(plan.id)} className="ui button primary">
                    ADD PLAN
                </button>
            </div>
        )
    }

    renderPlanDetails() {
        const filteredPlans = filterChain(this.props.filteredPlans, this.props.filter)
        return filteredPlans.map((plan, index) => {
            return(
                <div key={index}>
                    <div className="container-wrapper_right-content">
                        <div className="container-wrapper_right-content_top">
                            <div className="container-wrapper_right-content_top--text">Metal Tier: {plan.metalTier}</div>
                            <div className="container-wrapper_right-content_top--text">Plan Code: {plan.planCode}</div>
                            <div className="container-wrapper_right-content_top--text">Plan Type: {plan.planType}</div>
                            <div className="container-wrapper_right-content_top--text">Total Monthly Cost: {plan.totalMonthlyCost}</div>
                            <div className="container-wrapper_right-content_top--text">Deductible: {plan.deductible}</div>
                            <div className="container-wrapper_right-content_top--text">Plan Name: {plan.planName}</div>
                            <div className="container-wrapper_right-content_top--button">{this.renderActions(plan)}</div>
                        </div>
                        <div className="container-wrapper_right-content_bottom">
                            <div className="container-wrapper_right-content_bottom--text">Metal Tier: {plan.metalTier}</div>
                            <div className="container-wrapper_right-content_bottom--text">Plan Code: {plan.planCode}</div>
                            <div className="container-wrapper_right-content_bottom--text">Plan Type: {plan.planType}</div>
                            <div className="container-wrapper_right-content_bottom--text">Total Monthly Cost: {plan.totalMonthlyCost}</div>
                            <div className="container-wrapper_right-content_bottom--text">Deductible: {plan.deductible}</div>
                            <div className="container-wrapper_right-content_bottom--text">Plan Name: {plan.planName}</div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderPlanDetails()}
                <div className="container-wrapper_right--button">
                    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={ADD_EMPLOYEES_PAGE}/>
                    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={QUOTE_SUMMARY}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {fetchPlans, addPlan, plansFilter})(PlanSelectionList);