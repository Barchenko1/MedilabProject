import {combineReducers} from "redux";
import employeeReducer from './employeeReducer';
import {reducer} from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
    form: reducer,
    employeeReducer,
    authReducer
})