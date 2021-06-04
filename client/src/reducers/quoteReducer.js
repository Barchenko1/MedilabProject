import {
    CREATE_QUOTE
} from "../utils/types";
const INIT_STATE = {
    quote: {}
}

export default (state = INIT_STATE, action) => {
    if (action.type === CREATE_QUOTE) {
        console.log(action.payload);
        return {...state, quote : action.payload};
    }

    return state;
}