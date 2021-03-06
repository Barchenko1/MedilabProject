import React from 'react';
import {connect} from 'react-redux';
import {addPlan, fetchPlans, plansFilter, sortPlans} from "../../actions/planActions";
import {Link} from "react-router-dom";
import {ADD_EMPLOYEES_PAGE, PLAN_SELECTION_PAGE, QUOTE_SUMMARY} from "../../utils/consts";
import CustomButton from "../../customComponents/buttons/CustomButton";
import PlanSelectionList from "./PlanSelectionList";
import {filterChain} from "../../utils/util";

class PlanSelectionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            metalTiers: [
                {id: 1, key: 'metalTier', name: "Platinum", value: "platinum", isChecked: false},
                {id: 2, key: 'metalTier', name: "Gold", value: "gold", isChecked: false},
                {id: 3, key: 'metalTier', name: "Silver", value: "silver", isChecked: false},
                {id: 4, key: 'metalTier', name: "Bronze", value: "bronze", isChecked: false}
            ],
            planTypes: [
                {id: 1, key: 'planType', name: "EPO", value: "EPO", isChecked: false},
                {id: 2, key: 'planType', name: "PPO", value: "PPO", isChecked: false},
                {id: 3, key: 'planType', name: "HSA", value: "HSA", isChecked: false},
                {id: 4, key: 'planType', name: "HMO", value: "HMO", isChecked: false}
            ]
        }
    }

    componentDidMount() {
        if (localStorage.getItem('productLine') !== null)  {
            this.props.fetchPlans(localStorage.getItem('productLine'))
        } else {
            this.props.fetchPlans(this.props.currentProductLine)
        }
        if (localStorage.getItem('metalTiers') !== null) {
            this.setState({metalTiers: JSON.parse(localStorage.getItem('metalTiers'))})
        }
        if (localStorage.getItem('planTypes') !== null) {
            this.setState({planTypes: JSON.parse(localStorage.getItem('planTypes'))})
        }
        // if (localStorage.getItem('metalTiers') !== null && localStorage.getItem('planTypes') !== null && localStorage.getItem('plans')) {
        //     const filters = {metalTiers: JSON.parse(localStorage.getItem('metalTiers')), planTypes: JSON.parse(localStorage.getItem('planTypes'))};
        //     this.props.plansFilter(JSON.parse(localStorage.getItem('plans')), filters)
        // }
    }

    handleFilters = (event) => {
        const filters = {
            metalTiers: this.handleCheckMetalTierElement(event),
            planTypes: this.handleCheckPlanTypeElement(event)
        };
        this.props.plansFilter(this.props.plans, filters)
    }

    defaultHandleFilters = () => {
        const metalTiers = localStorage.getItem('metalTiers') !== null ? JSON.parse(localStorage.getItem('metalTiers')) : this.state.metalTiers
        metalTiers.forEach(metalTier => {
            metalTier.isChecked = false;
        });
        this.setState({metalTiers: metalTiers});
        localStorage.setItem('metalTiers', JSON.stringify(metalTiers));

        const planTypes = localStorage.getItem('planTypes') !== null ? JSON.parse(localStorage.getItem('planTypes')) : this.state.planTypes
        planTypes.forEach(planType => {
            planType.isChecked = false;
        })
        this.setState({planTypes: planTypes});
        localStorage.setItem('planTypes', JSON.stringify(planTypes));
    }

    handleCheckMetalTierElement = (event) => {
        const metalTiers = localStorage.getItem('metalTiers') !== null ? JSON.parse(localStorage.getItem('metalTiers')) : this.state.metalTiers
        metalTiers.forEach(metalTier => {
            if (metalTier.value === event.target.value)
                metalTier.isChecked = event.target.checked
        })
        this.setState({metalTiers: metalTiers});
        localStorage.setItem('metalTiers', JSON.stringify(metalTiers));
        return metalTiers;
    }

    handleCheckPlanTypeElement = (event) => {
        const planTypes = localStorage.getItem('planTypes') !== null ? JSON.parse(localStorage.getItem('planTypes')) : this.state.planTypes
        planTypes.forEach(planType => {
            if (planType.value === event.target.value)
                planType.isChecked = event.target.checked
        })
        this.setState({planTypes: planTypes});
        localStorage.setItem('planTypes', JSON.stringify(planTypes));
        return planTypes;
    }

    renderMetalTierFilters() {
        return(
            <div>
                <h3>Metal Tier</h3>
                {
                    this.state.metalTiers.map((metalTier, index) => {
                        return (
                            <div key={index}>
                                <input onChange={this.handleFilters} type="checkbox" checked={metalTier.isChecked} value={metalTier.value} /> {metalTier.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderPlanTypesFilter() {
        return(
            <div>
                <h3>Plan Type</h3>
                {
                    this.state.planTypes.map((planType, index) => {
                        return (
                            <div key={index}>
                                <input onChange={this.handleFilters} type="checkbox" checked={planType.isChecked} value={planType.value} /> {planType.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render

    renderSortByTotalMonthCost = () => {
        const sortItem = localStorage.getItem('sortItem') !== null ? JSON.parse(localStorage.getItem('sortItem')) : this.props.sortItem;
        return(
            <div>
                <label>
                    {/*{" "}*/}
                    Sort by Total Month Cost
                    <select
                        value={this.props.sortItem}
                        onChange={(event) => this.props.sortPlans(this.props.filteredPlans, event.target.value)}
                    >
                        <option value="">ALL</option>
                        <option value="lowestprice">Lowest to Highest</option>
                        <option value="highestprice">Highest to Lowest</option>
                    </select>
                </label>
            </div>
        )
    }

    onClickProductLine(productLine) {
        this.props.fetchPlans(productLine);
        localStorage.setItem('productLine', productLine);
        this.defaultHandleFilters();
    }

    renderProductLinesBar() {
        return(
            <div className="left floated content">
                <Link
                    onClick={() => this.onClickProductLine('medical')}
                    to={PLAN_SELECTION_PAGE}>Medical</Link>
                    {this.productLineCount('medical')}
                <br/>
                <Link
                    onClick={() => this.onClickProductLine("dental")}
                    to={PLAN_SELECTION_PAGE}>Dental</Link>
                    {this.productLineCount('dental')}
                <br/>
                <Link
                    onClick={() => this.onClickProductLine("vision")}
                    to={PLAN_SELECTION_PAGE}>Vision</Link>
                    {this.productLineCount('vision')}
                <br/>
                <Link
                    onClick={() => this.onClickProductLine("life")}
                    to={PLAN_SELECTION_PAGE}>Life</Link>
                    {this.productLineCount('life')}
            </div>
        )
    }

    productLineCount = (productLine) => {
        const filter={metalTiers: this.state.metalTiers, planTypes: this.state.planTypes};
        if (localStorage.getItem('productLine') !== null)  {
            return localStorage.getItem('productLine') === productLine ? filterChain(this.props.filteredPlans, filter).length : null;
        } else {
            return this.props.currentProductLine === productLine ? filterChain(this.props.filteredPlans, filter).length : null;
        }
    }

    render() {
        return (
            <div>
                <h2>Plan Selection</h2>
                {this.renderProductLinesBar()}
                {this.renderSortByTotalMonthCost()}
                {this.renderMetalTierFilters()}
                {this.renderPlanTypesFilter()}
                <PlanSelectionList
                    filter={{metalTiers: this.state.metalTiers, planTypes: this.state.planTypes}}
                    filteredPlans={this.props.filteredPlans}
                />
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
        filteredPlans: state.planReducer.filteredPlans,
        currentProductLine: state.planReducer.currentProductLine,
        sortItem: state.planReducer.sortItem
    }
}

export default connect(mapStateToProps, {fetchPlans, addPlan, plansFilter, sortPlans})(PlanSelectionPage);