import React from 'react';
import {reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";
import CustomDropDown from "../../customComponents/dropdowns/CustomDropDown";
import CustomCheckBox from "../../customComponents/checkBoxes/CustomCheckBox";

class CompanyProfileForm extends React.Component {

    organizationTypes = [
        'Commercial',
        'State',
        'Company',
        'Formal'
    ];

    renderError(meta) {

    };

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.onSubmit(formProps);
    }

    renderCompanyInfo() {
        return(
            <div>
                <CustomInput
                    type="text"
                    name="fistName"
                    renderError={this.renderError}
                    label="First name"/>
                <CustomDropDown
                    name="gender"
                    data={this.organizationTypes}
                    label="Gender"
                    renderError={this.renderError}
                />
            </div>
        )
    }

    renderProductLines() {
        return(
            <div>
                <label>Product Lines</label>
                <div>
                    <CustomCheckBox
                        name="medical"
                        caption="Medical"
                        renderError={this.renderError}
                    />
                    <CustomCheckBox
                        name="dental"
                        caption="Dental"
                        renderError={this.renderError}
                    />
                    <CustomCheckBox
                        name="vision"
                        caption="Vision"
                        renderError={this.renderError}
                    />
                    <CustomCheckBox
                        name="life"
                        caption="Life"
                        renderError={this.renderError}
                    />
                </div>
            </div>
        )
    }

    renderBillingAddress() {
        return(
            <div>
                <CustomInput
                    type="text"
                    name="address"
                    renderError={this.renderError}
                    label="Street Address"/>
                <CustomInput
                    type="text"
                    name="city"
                    renderError={this.renderError}
                    label="City"/>
                <CustomInput
                    type="text"
                    name="state"
                    renderError={this.renderError}
                    label="State"/>
                <CustomInput
                    type="text"
                    name="zipCode"
                    renderError={this.renderError}
                    label="ZIP Code"/>
            </div>
        )
    }

    renderContactPerson() {
        return(
            <div>
                <CustomInput
                    type="text"
                    name="fistName"
                    renderError={this.renderError}
                    label="First name"/>
                <CustomInput
                    type="text"
                    name="lastName"
                    renderError={this.renderError}
                    label="Last name"/>
                <CustomInput
                    type="email"
                    name="email"
                    renderError={this.renderError}
                    label="Email"/>
                <CustomInput
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Phone number"/>
            </div>
        )
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {this.renderCompanyInfo()}
                {this.renderProductLines()}
                {this.renderBillingAddress()}
                {this.renderContactPerson()}
                <button className="ui button primary">
                    Continue
                </button>
            </form>
        );
    }
}

const validation = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'companyProfileForm',
    validation
})(CompanyProfileForm);

export default formWrapper;