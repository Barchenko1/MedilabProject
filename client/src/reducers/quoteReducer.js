import {
    CREATE_QUOTE, GET_QUOTE_STATISTIC
} from "../utils/types";
const INIT_STATE = {
    quote: {},
    quoteStatistic: []
}

export default (state = INIT_STATE, action) => {
    if (action.type === CREATE_QUOTE) {
        console.log(action.payload);
        return {...state, quote : action.payload};
    }
    if (action.type === GET_QUOTE_STATISTIC) {
        return {...state, quoteStatistic : action.payload};
    }
    return state;
}