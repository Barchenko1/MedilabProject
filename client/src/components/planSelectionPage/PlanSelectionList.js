import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, plansFilter} from "../../actions/planActions";
import {filterChain} from "../../utils/util";

class PlanSelectionList extends React.Component {

    componentDidMount() {

    }

    renderActions(plan) {
        return(
            <div className="right floated content">
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
                <div className="item" key={index}>
                    {this.renderActions(plan)}
                    <div className="content">
                        {plan.planName} {plan.planCode} {plan.type}
                        {plan.totalMonthlyCost} {plan.metalTier} {plan.deductible}
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui celled list">
                {this.renderPlanDetails()}
            </div>
        );
    }
}

export default connect(null, {fetchPlans, addPlan, plansFilter})(PlanSelectionList);