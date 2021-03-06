import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, plansFilter} from "../../actions/planActions";
import {filterChain} from "../../utils/util";

const metalTiers = [
    {id: 1, key: 'metalTier', name: "Platinum", value: "platinum", isChecked: false},
    {id: 2, key: 'metalTier', name: "Gold", value: "gold", isChecked: false},
    {id: 3, key: 'metalTier', name: "Silver", value: "silver", isChecked: false},
    {id: 4, key: 'metalTier', name: "Bronze", value: "bronze", isChecked: false}
];
    const planTypes = [
    {id: 1, key: 'planType', name: "EPO", value: "EPO", isChecked: false},
    {id: 2, key: 'planType', name: "PPO", value: "PPO", isChecked: false},
    {id: 3, key: 'planType', name: "HSA", value: "HSA", isChecked: false},
    {id: 4, key: 'planType', name: "HMO", value: "HMO", isChecked: false}
];

class PlanSelectionList extends React.Component {

    componentDidMount() {
        // if (localStorage.getItem('productLine') !== null) {
        //     this.props.fetchPlans(localStorage.getItem('productLine'));
        // } else {
        //     this.props.fetchPlans(this.props.currentProductLine);
        //     localStorage.setItem('productLine', this.props.currentProductLine);
        // }
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



const mapStateToProps = (state) => {
    return {
        plans: state.planReducer.plans,
        currentProductLine: state.planReducer.currentProductLine,
        filteredPlans: state.planReducer.filteredPlans
    }
}

export default connect(mapStateToProps, {fetchPlans, addPlan, plansFilter})(PlanSelectionList);