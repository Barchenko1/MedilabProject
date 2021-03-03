import React from 'react';
import {Field, reduxForm} from "redux-form";
import CustomCheckBox from "../../../customComponents/checkBoxes/CustomCheckBox";

class MetalTierFilterForm extends React.Component {

    renderError() {

    }

    renderMetalTierCheckBox = (props) => {
        const {checkBoxValue, caption, ...field} = props;
        this.onChangeMetalTire(props);
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

    onChangeMetalTire = (props) => {
        console.log(props);
        console.log(this.props)
        let obj;
        if (localStorage.getItem('metalTier') !== null) {
            obj = {...JSON.parse(localStorage.getItem('metalTier'))}
        } else {
            obj = {...this.props.initialValues}
        }
        obj[props.input.name] = props.input.value;
        localStorage.setItem('metalTier', JSON.stringify(obj));
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    renderMetalTierFilter(label) {
        console.log(this.props)
        return(
            <div>
                <label>{label}</label>
                <div>
                    <Field name="platinum" component={this.renderMetalTierCheckBox} caption="Platinum" />
                    <Field name="gold" component={this.renderMetalTierCheckBox} caption="Gold" />
                    <Field name="silver" component={this.renderMetalTierCheckBox} caption="Silver" />
                    <Field name="bronze" component={this.renderMetalTierCheckBox} caption="Bronze" />
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
                {this.renderMetalTierFilter("Metal Tire")}
            </form>
        );
    }
}

const formWrapper = reduxForm({
    form: 'metalTierFilter'
})(MetalTierFilterForm);

export default formWrapper;