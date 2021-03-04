import React from 'react';
import {connect} from 'react-redux';
import {fetchPlans} from "../../../actions/planActions";

class PlanSelectionFilters extends React.Component {

    checkBox = props => {
        return (
            <li>
                <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
            </li>
        )
    }

    componentDidMount() {
        if (localStorage.getItem('metalTiers') !== null) {
            this.setState({metalTiers: JSON.parse(localStorage.getItem('metalTiers'))})
        }
        if (localStorage.getItem('planTypes') !== null) {
            this.setState({planTypes: JSON.parse(localStorage.getItem('planTypes'))})
        }
        if (localStorage.getItem('metalTiers') !== null && localStorage.getItem('planTypes') !== null && localStorage.getItem('plans')) {
            const filters = {metalTiers: JSON.parse(localStorage.getItem('metalTiers')), planTypes: JSON.parse(localStorage.getItem('planTypes'))};
            this.props.universalFilter(JSON.parse(localStorage.getItem('plans')), filters)
        }
    }

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
            ],
            sendToFilter: []
        }
    }

    handleFilters = (event) => {
        // const filters = [...this.handleCheckMetalTierElement(event), ...this.handleCheckPlanTypeElement(event)];
        const filters = {metalTiers: this.handleCheckMetalTierElement(event), planTypes: this.handleCheckPlanTypeElement(event)};
        console.log(this.props.plans)
        console.log(filters);
        this.props.universalFilter(this.props.plans, filters)
    }

    handleCheckMetalTierElement = (event) => {
        const metalTiers = localStorage.getItem('metalTiers') !== null ? JSON.parse(localStorage.getItem('metalTiers')) : this.state.metalTiers
        metalTiers.forEach(metalTier => {
            if (metalTier.value === event.target.value)
                metalTier.isChecked =  event.target.checked
        })
        this.setState({metalTiers: metalTiers});
        localStorage.setItem('metalTiers', JSON.stringify(metalTiers));
        return metalTiers;
    }

    handleCheckPlanTypeElement = (event) => {
        const planTypes = localStorage.getItem('planTypes') !== null ? JSON.parse(localStorage.getItem('planTypes')) : this.state.planTypes
        planTypes.forEach(planType => {
            if (planType.value === event.target.value)
                planType.isChecked =  event.target.checked
        })
        this.setState({planTypes: planTypes});
        localStorage.setItem('planTypes', JSON.stringify(planTypes));
        return planTypes;
    }

    renderMetalTierFilters() {
        return(
            <div>
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

    render() {
        return (
            <div>
                {this.renderMetalTierFilters()}
                {this.renderPlanTypesFilter()}
            </div>
        );
    }
}

export default PlanSelectionFilters;