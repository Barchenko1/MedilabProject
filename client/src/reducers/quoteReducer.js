import {
    CREATE_QUOTE
} from "../utils/types";


export default (state = {}, action) => {
    if (action.type === CREATE_QUOTE) {
        return state;
    }

    return state;
}