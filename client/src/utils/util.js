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

export const sortPlansByTotalMonthlyCost = (plans, sortItem) => {
    if (sortItem !== "") {
        plans.sort((a, b) =>
            sortItem === "lowestprice"
                ? a.totalMonthlyCost > b.totalMonthlyCost
                ? 1
                : -1
                : a.totalMonthlyCost < b.totalMonthlyCost
                ? 1
                : -1
        );
    } else {
        plans.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    return plans;
}

export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}