import React from 'react';
import {reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";
import CustomDropDown from "../../customComponents/dropdowns/CustomDropDown";
import CustomCheckBox from "../../customComponents/checkBoxes/CustomCheckBox";

class CompanyProfileForm extends React.Component {

    organizationTypes = [
        'Partnership',
        'Limited liability company (LLC)',
        'C corp',
        'Nonprofit'
    ];

    renderError(meta) {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    };

    onSubmit = (formProps) => {
        console.log(formProps)
        this.props.onSubmit(formProps);
    }

    renderCompanyInfo() {
        return(
            <React.Fragment>
                <CustomInput
                    type="text"
                    name="companyName"
                    renderError={this.renderError}
                    label="Company name"/>
                <CustomDropDown
                    name="organizationType"
                    data={this.organizationTypes}
                    label="Organization Type"
                    renderError={this.renderError}
                />
            </React.Fragment>
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
                    type="number"
                    name="houseNumber"
                    renderError={this.renderError}
                    label="House number"/>
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
                    type="number"
                    name="zipCode"
                    renderError={this.renderError}
                    label="ZIP Code"/>
            </div>
        )
    }

    renderContactPerson() {
        return(
            <React.Fragment>
                <CustomInput
                    type="email"
                    name="email"
                    renderError={this.renderError}
                    label="Company contact email"/>
                <CustomInput
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Company contact phone number"/>
            </React.Fragment>
        )
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="">
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

const validate = (formProps) => {
    const errors = {};
    console.log(formProps)
    if (!formProps.companyName) {
        errors.companyName = 'You must enter a company name';
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'companyProfileForm',
    validate
})(CompanyProfileForm);

export default formWrapper;