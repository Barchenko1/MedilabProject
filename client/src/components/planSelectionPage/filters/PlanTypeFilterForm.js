import React from 'react';
import {Field, reduxForm} from "redux-form";
import CustomCheckBox from "../../../customComponents/checkBoxes/CustomCheckBox";

class MetalTierFilter extends React.Component {

    renderError() {

    }

    renderPlanTypeCheckBox = (props) => {
        const {checkBoxValue, caption, ...field} = props;
        this.onChangePlanType(props);
        return(
            <div>
                <input {...field.input}
                       type="checkbox"
                       checked={props.input.value}
                       onChange={props.input.onChange}
                />
                <span>{props.caption}</span>
            </div>
        )
    }

    onChangePlanType = (props) => {
        console.log(props);
        console.log(this.props)
        let obj;
        if (localStorage.getItem('planType') !== null) {
            obj = {...JSON.parse(localStorage.getItem('planType'))}
        } else {
            obj = {...this.props.initialValues}
        }
        obj[props.input.name] = props.input.value;
        localStorage.setItem('planType', JSON.stringify(obj));
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    renderPlanType(label) {
        return(
            <div>
                <label>{label}</label>
                <div>
                    <Field name="EPO" component={this.renderPlanTypeCheckBox} caption="EPO" />
                    <Field name="PPO" component={this.renderPlanTypeCheckBox} caption="PPO" />
                    <Field name="HSA" component={this.renderPlanTypeCheckBox} caption="HSA" />
                    <Field name="HMO" component={this.renderPlanTypeCheckBox} caption="HMO" />
                </div>
            </div>
        )
    }

    onChangeLog(formProps) {
        console.log(formProps)
    }

    render() {
        return (
            <form onChange={this.onChangeLog} onSubmit={this.submitForm}>
                {this.renderPlanType("Plan Type")}
            </form>
        );
    }
}

const formWrapper = reduxForm({
    form: 'planTypeFilter'
})(MetalTierFilter);

export default formWrapper;