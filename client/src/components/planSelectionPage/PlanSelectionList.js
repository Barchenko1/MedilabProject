import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans} from "../../actions/planActions";
import {Link} from "react-router-dom";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";
import CustomButton from "../../customComponents/buttons/CustomButton";

class PlanSelectionList extends React.Component {

    componentDidMount() {
        this.props.fetchPlans("medical");
    }

    onClickProductLine(productLine) {
        this.props.fetchPlans(productLine);
    }

    renderPlanListBar() {
        return(
            <div className="left floated content">
                <Link onClick={() => this.props.fetchPlans("medical")} to={PLAN_SELECTION_PAGE}>Medical</Link><br/>
                <Link onClick={() => this.props.fetchPlans("dental")} to={PLAN_SELECTION_PAGE}>Dental</Link><br/>
                <Link onClick={() => this.props.fetchPlans("vision")} to={PLAN_SELECTION_PAGE}>Vision</Link><br/>
                <Link onClick={() => this.props.fetchPlans("life")} to={PLAN_SELECTION_PAGE}>Life</Link><br />
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
        return this.props.plans.map((plan, index) => {
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
                {this.renderPlanListBar()}
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

const mapStateToProps = state => {
    return {
        plans: state.planReducer.plans
    }
}

export default connect(mapStateToProps, {fetchPlans, addPlan})(PlanSelectionList);