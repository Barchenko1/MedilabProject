import React from 'react';

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
    }

    constructor(props) {
        super(props);
        this.state = {
            metalTiers: [
                {id: 1, name: "Platinum", value: "platinum", isChecked: false},
                {id: 2, name: "Gold", value: "gold", isChecked: false},
                {id: 3, name: "Silver", value: "silver", isChecked: false},
                {id: 4, name: "Bronze", value: "bronze", isChecked: false}
            ],
            planTypes: [
                {id: 1, name: "EPO", value: "EPO", isChecked: false},
                {id: 2, name: "PPO", value: "PPO", isChecked: false},
                {id: 3, name: "HSA", value: "HSA", isChecked: false},
                {id: 4, name: "HMO", value: "HMO", isChecked: false}
            ]
        }
    }

    handleCheckMetalTierElement = (event) => {
        const metalTiers = localStorage.getItem('metalTiers') !== null ? JSON.parse(localStorage.getItem('metalTiers')) : this.state.metalTiers
        metalTiers.forEach(metalTier => {
            if (metalTier.value === event.target.value)
                metalTier.isChecked =  event.target.checked
        })
        this.setState({metalTiers: metalTiers});
        localStorage.setItem('metalTiers', JSON.stringify(metalTiers));
        this.props.onChange()
    }

    handleCheckPlanTypeElement = (event) => {
        const planTypes = localStorage.getItem('planTypes') !== null ? JSON.parse(localStorage.getItem('planTypes')) : this.state.planTypes
        planTypes.forEach(planType => {
            if (planType.value === event.target.value)
                planType.isChecked =  event.target.checked
        })
        this.setState({planTypes: planTypes});
        localStorage.setItem('planTypes', JSON.stringify(planTypes));
    }

    renderMetalTierFilters() {
        return(
            <div>
                {
                    this.state.metalTiers.map((metalTier, index) => {
                        return (
                            <div key={index}>
                                <input onChange={this.handleCheckMetalTierElement} type="checkbox" checked={metalTier.isChecked} value={metalTier.value} /> {metalTier.name}
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
                                <input onChange={this.handleCheckPlanTypeElement} type="checkbox" checked={planType.isChecked} value={planType.value} /> {planType.name}
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