import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, filterMetalTypes} from "../../actions/planActions";
import {Link} from "react-router-dom";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";
import CustomButton from "../../customComponents/buttons/CustomButton";
import PlanSelectionFilters from "./filters/PlanSelectionFilters";

class PlanSelectionList extends React.Component {

    state = {productLine: 'medical'};

    componentDidMount() {
        if (localStorage.getItem('productLine') !== null) {
            this.props.fetchPlans(localStorage.getItem('productLine'));
        } else {
            this.props.fetchPlans("medical");
            localStorage.setItem('productLine', 'medical');
        }
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
                {/*<MetalTierFilterForm*/}
                {/*    initialValues={{...this.initMetalTierFilters()}}*/}
                {/*/>*/}
                {/*<PlanTypeFilter*/}
                {/*    initialValues={{...this.initPlanTypeFilters()}}*/}
                {/*/>*/}
                <PlanSelectionFilters onChange={this.filterPlans}/>
            </div>
        )
    }

    filterPlans = () => {
        const plans = this.props.plans;
        const metalTiers = JSON.parse(localStorage.getItem("metalTiers"));
        const isCheckedMetalTiers = metalTiers.filter(metalTier => metalTier.isChecked === true);
        // const filteredPlans = isCheckedMetalTiers.map(metalTier => {
        //     return plans.filter(plan => {
        //        return  plan.metalTier === metalTier.value
        //     })
        // });
        const filteredPlans = isCheckedMetalTiers.map(metalTier => {
            return plans.filter(plan => {
                return plan.metalTier === metalTier.value;
            })
        });
        console.log(filteredPlans[0])
        if (filteredPlans[0] !== undefined) {
            this.props.filterMetalTypes(filteredPlans[0]);
        }
    }

    // initMetalTierFilters() {
    //     let metalTierFilters = {
    //         platinum: false,
    //         gold: false,
    //         silver: false,
    //         bronze: false
    //     };
    //     if (localStorage.getItem('metalTier') !== null) {
    //         metalTierFilters = {...JSON.parse(localStorage.getItem('metalTier'))}
    //     }
    //     return metalTierFilters;
    // }
    //
    // initPlanTypeFilters() {
    //     let planTypeFilters = {
    //         EPO: false,
    //         PPO: false,
    //         HSA: false,
    //         HMO: false
    //     };
    //     if (localStorage.getItem('planType') !== null) {
    //         planTypeFilters = {...JSON.parse(localStorage.getItem('planType'))}
    //     }
    //     console.log(planTypeFilters)
    //     return planTypeFilters;
    // }

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
        console.log(this.props)
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

const mapStateToProps = state => {
    return {
        plans: state.planReducer.plans
    }
}

export default connect(mapStateToProps, {fetchPlans, addPlan, filterMetalTypes})(PlanSelectionList);