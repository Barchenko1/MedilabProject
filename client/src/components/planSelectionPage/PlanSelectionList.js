import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, plansFilter} from "../../actions/planActions";
import {Link} from "react-router-dom";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";
import CustomButton from "../../customComponents/buttons/CustomButton";
import PlanSelectionFilters from "./filters/PlanSelectionFilters";

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
        if (localStorage.getItem('productLine') !== null) {
            this.props.fetchPlans(localStorage.getItem('productLine'));
        } else {
            this.props.fetchPlans(this.props.currentProductLine);
            localStorage.setItem('productLine', this.props.currentProductLine);
        }
    }

    onClickProductLine(productLine) {
        this.props.fetchPlans(productLine);
        localStorage.setItem('productLine', productLine);
    }

    renderProductLinesBar() {
        return(
            <div className="left floated content">
                <Link
                    onClick={() => this.onClickProductLine('medical')}
                    to={PLAN_SELECTION_PAGE}>Medical</Link>
                    {this.props.currentProductLine === 'medical' ? this.props.filteredPlans.length : null}
                <br/>
                <Link
                    onClick={() => this.onClickProductLine("dental")}
                    to={PLAN_SELECTION_PAGE}>Dental</Link>
                    {this.props.currentProductLine === 'dental' ? this.props.filteredPlans.length : null}
                    <br/>
                <Link
                    onClick={() => this.onClickProductLine("vision")}
                    to={PLAN_SELECTION_PAGE}>Vision</Link>
                    {this.props.currentProductLine === 'vision' ? this.props.filteredPlans.length : null}
                    <br/>
                <Link
                    onClick={() => this.onClickProductLine("life")}
                    to={PLAN_SELECTION_PAGE}>Life</Link>
                    {this.props.currentProductLine === 'life' ? this.props.filteredPlans.length : null}
                    <br/>
                <PlanSelectionFilters
                    plans={this.props.plans}
                    fetchPlans={this.props.fetchPlans}
                    plansFilter={this.props.plansFilter}
                />
            </div>
        )
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
        return this.props.filteredPlans.map((plan, index) => {
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
            <div>
                <h2>Plan Selection</h2>
                {this.renderProductLinesBar()}
                <div className="ui celled list">
                    {this.renderPlanDetails()}
                </div>
                <div className="buttonContainer">
                    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={ADD_EMPLOYEES_PAGE}/>
                    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={QUOTE_SUMMARY}/>
                </div>
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