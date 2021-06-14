import {combineReducers} from "redux";
import employeeReducer from './employeeReducer';
import {reducer} from "redux-form";
import authReducer from "./authReducer";
import planReducer from "./planReducer";
import companyProfileReducer from "./companyProfileReducer";
import quoteReducer from "./quoteReducer";
import quoteOverviewReducer from "./quoteOverviewReducer";

export default combineReducers({
    form: reducer,
    quoteReducer,
    companyProfileReducer,
    employeeReducer,
    authReducer,
    planReducer,
    quoteOverviewReducer
})