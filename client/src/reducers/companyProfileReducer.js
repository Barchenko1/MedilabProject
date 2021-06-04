import {
    SAVE_UPDATE_COMPANY_PROFILE
} from "../utils/types";

const INIT_STATE = {

    responseStatus: null
}

export default (state = INIT_STATE, action) => {
    if (action.type === SAVE_UPDATE_COMPANY_PROFILE) {
        const newState = {...state, responseStatus: action.payload}
        return newState
    }

    return state;
}