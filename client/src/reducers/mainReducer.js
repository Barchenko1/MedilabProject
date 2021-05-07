import {combineReducers} from "redux";
import employeeReducer from './employeeReducer';
import {reducer} from "redux-form";
import authReducer from "./authReducer";
import planReducer from "./planReducer";
import companyProfileReducer from "./companyProfileReducer";

export default combineReducers({
    form: reducer,
    companyProfileReducer,
    employeeReducer,
    authReducer,
    planReducer
})