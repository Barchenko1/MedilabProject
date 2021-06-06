import React from "react";
import {connect} from 'react-redux';
import {deletePlan, fetchSelectedPlans} from "../../actions/planActions";
import {Link} from "react-router-dom";
import CustomButton from "../../customComponents/buttons/CustomButton";
import {PLAN_SELECTION_PAGE, QUOTE_OVERVIEW} from "../../utils/consts";

const productLines = ["medical", "dental"];

class QuoteSummaryPage extends React.Component {

    componentDidMount() {
        this.props.fetchSelectedPlans();
    }

    renderActions(plan) {
        return(
            <div className="right floated content">
                <button onClick={() => this.props.deletePlan(plan.planCode)} className="ui button negative">
                    Delete plan
                </button>
            </div>
        )
    }

    renderPlanList() {
        console.log(this.props.allPlans);
        if (Object.keys(this.props.allPlans).length === 0) {
            return <div>Loading</div>
        }

        return productLines.map((productLine, index) => {
            return(
                <React.Fragment key={index}>
                    {productLine}
                    {this.renderPlanDetails(productLine)}
                </React.Fragment>
            )
        })
    }

    renderPlanDetails(productLine) {
        return this.props.allPlans[productLine].map((plan, index) => {
            return (
                <div className="item" key={index}>
                    {this.renderActions(plan)}
                    <div className="content">
                        {plan.planName} {plan.type} {plan.totalMonthlyCost}
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <h2>Plan Summary</h2>
                <div className="ui celled list">
                    {this.renderPlanList()}
                </div>
                <div className="buttonContainer">
                    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={PLAN_SELECTION_PAGE}/>
                    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={QUOTE_OVERVIEW}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allPlans: state.planReducer.allPlans,
        quote: state.quoteReducer.quote
    }
}

export default connect(mapStateToProps, {fetchSelectedPlans, deletePlan})(QuoteSummaryPage);