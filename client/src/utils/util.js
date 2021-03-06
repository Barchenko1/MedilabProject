const defaultPlanFilter = {
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


export const filterChain = (plans, filter = defaultPlanFilter) => {
    let filterChain = plans;
    if (filter.metalTiers.filter(f => f.isChecked === true).length !== 0) {
        filterChain = filter.metalTiers.map(f => {
            return plans.filter(plan => plan[f.key] === f.value && f.isChecked === true);
        }).flat();
    }
    if (filter.planTypes.filter(f => f.isChecked === true).length !== 0) {
        filterChain = filter.planTypes.map(f => {
            return filterChain.filter(plan => plan[f.key] === f.value && f.isChecked === true);
        }).flat();
    }
    return [...filterChain];
}