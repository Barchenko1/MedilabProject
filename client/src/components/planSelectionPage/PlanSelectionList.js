import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, universalFilter} from "../../actions/planActions";
import {Link} from "react-router-dom";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";
import CustomButton from "../../customComponents/buttons/CustomButton";
import PlanSelectionFilters from "./filters/PlanSelectionFilters";

class PlanSelectionList extends React.Component {

    state = {productLine: 'medical', filters: null};

    componentDidMount() {
        // this.props.fetchPlans(this.props.currentProductLine);

        // if (localStorage.getItem('productLine') !== null) {
        //     this.props.fetchPlans(localStorage.getItem('productLine'));
        // } else {
        //     this.props.fetchPlans("medical");
        //     localStorage.setItem('productLine', 'medical');
        // }

        // if (localStorage.getItem('filteredPlans') !== null) {
        //     this.props.filteredPlans = JSON.parse(localStorage.getItem('filteredPlans'));
        // }
    }

    onClickProductLine(productLine) {
        this.props.fetchPlans(productLine);
        this.setState({productLine: productLine});
        localStorage.setItem('productLine', productLine);
    }

    renderProductLinesBar() {
        return(
            <div className="left floated content">
                <Link
                    onClick={() => this.onClickProductLine('medical')}
                    to={PLAN_SELECTION_PAGE}>Medical</Link>
                    {localStorage.getItem('productLine') === 'medical' ? this.props.plans.length : null}
                <br/>
                <Link
                    onClick={() => this.onClickProductLine("dental")}
                    to={PLAN_SELECTION_PAGE}>Dental</Link>
                    {localStorage.getItem('productLine') === 'dental' ? this.props.plans.length : null}
                    <br/>
                <Link
                    onClick={() => this.onClickProductLine("vision")}
                    to={PLAN_SELECTION_PAGE}>Vision</Link>
                    {localStorage.getItem('productLine') === 'vision' ? this.props.plans.length : null}
                    <br/>
                <Link
                    onClick={() => this.onClickProductLine("life")}
                    to={PLAN_SELECTION_PAGE}>Life</Link>
                    {localStorage.getItem('productLine') === 'life' ? this.props.plans.length : null}
                    <br/>
                <PlanSelectionFilters
                    sPlans={this.props.plans}
                    universalFilter={this.props.universalFilter}
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

export default connect(mapStateToProps, {fetchPlans, addPlan, universalFilter})(PlanSelectionList);