export const filterChain = (plans, filter) => {
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