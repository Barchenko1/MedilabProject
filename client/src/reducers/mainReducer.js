import {combineReducers} from "redux";
import employeeReducer from './employeeReducer';
import {reducer} from "redux-form";

export default combineReducers({
    form: reducer,
    employeeReducer
})