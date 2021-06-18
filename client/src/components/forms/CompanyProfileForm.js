import React from 'react';
import {reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";
import CustomDropDown from "../../customComponents/dropdowns/CustomDropDown";
import CustomCheckBox from "../../customComponents/checkBoxes/CustomCheckBox";
import './CompanyProfileForm.scss';
import CustomButton from '../../customComponents/buttons/CustomButton';
import {HOME_PAGE} from '../../utils/consts';

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
                <div className="errormsg">
                    {meta.error}
                </div>
            )
        }
    };

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }

    renderCompanyInfo() {
        return(
            <div className="wrapper_left">
                <CustomInput
                    groupStyle="wrapper_left-item"
                    labelStyle='wrapper_left-label'
                    inputStyle='wrapper_left-input'
                    type="text"
                    name="companyName"
                    renderError={this.renderError}
                    label="Company name"/>
                {this.renderProductLines()}
                <CustomInput
                    groupStyle="wrapper_left-item"
                    labelStyle='wrapper_left-label'
                    inputStyle='wrapper_left-input'
                    type="number"
                    name="discount"
                    renderError={this.renderError}
                    label="Discount for employees (%)"/>
                <CustomInput
                    groupStyle="wrapper_left-item"
                    labelStyle='wrapper_left-label'
                    inputStyle='wrapper_left-input'
                    type="email"
                    name="email"
                    renderError={this.renderError}
                    label="Company contact email"/>
                <CustomInput
                    groupStyle="wrapper_left-item"
                    labelStyle='wrapper_left-label'
                    inputStyle='wrapper_left-input'
                    type="text"
                    name="phone"
                    renderError={this.renderError}
                    label="Company contact phone number"/>
                <CustomDropDown
                    groupStyle="wrapper_left-item"
                    labelStyle='wrapper_left-label'
                    inputStyle='wrapper_left-input'
                    name="organizationType"
                    data={this.organizationTypes}
                    label="Organization Type"
                    renderError={this.renderError}
                />
            </div>
        )
    }

    renderProductLines() {
        return(
            <div>
                <label>Product Lines</label>
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
        )
    }

    renderBillingAddress() {
        return(
            <div className="wrapper_right">
                <CustomInput
                    groupStyle="wrapper_right-item"
                    labelStyle='wrapper_right-label'
                    inputStyle='wrapper_right-input'
                    type="number"
                    name="houseNumber"
                    renderError={this.renderError}
                    label="House number"/>
                <CustomInput
                    groupStyle="wrapper_right-item"
                    labelStyle='wrapper_right-label'
                    inputStyle='wrapper_right-input'
                    type="text"
                    name="address"
                    renderError={this.renderError}
                    label="Street Address"/>
                <CustomInput
                    groupStyle="wrapper_right-item"
                    labelStyle='wrapper_right-label'
                    inputStyle='wrapper_right-input'
                    type="text"
                    name="city"
                    renderError={this.renderError}
                    label="City"/>
                <CustomInput
                    groupStyle="wrapper_right-item"
                    labelStyle='wrapper_right-label'
                    inputStyle='wrapper_right-input'
                    type="text"
                    name="state"
                    renderError={this.renderError}
                    label="State"/>
                <CustomInput
                    groupStyle="wrapper_right-item"
                    labelStyle='wrapper_right-label'
                    inputStyle='wrapper_right-input'
                    type="number"
                    name="zipCode"
                    renderError={this.renderError}
                    label="ZIP Code"/>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="cp_form">
                <div className="wrapper addheight">
                    {this.renderCompanyInfo()}
                    {this.renderBillingAddress()}
                </div>
                <div className="buttonContainer">
                    <CustomButton className="buttonContainer_prev" styleProp={{textAlign: 'left'}} name="Previous" to={HOME_PAGE}/>
                    <button className="buttonContainer_cont">
                        Continue
                    </button>
                </div>
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

    if (formProps.zipCode && formProps.zipCode.length !== 5) {
        errors.zipCode = 'Zip code should be 5 symbols';
    }

    if (formProps.state && formProps.state.length !== 2) {
        errors.state = 'State should be 2 symbols';
    }

    if (!formProps.discount) {
        errors.discount = 'You must enter discount';
    }

    if (!formProps.zipCode) {
        errors.zipCode = 'You must enter zip code';
    }

    if (!formProps.state) {
        errors.state = 'You must enter state';
    }

    if (!formProps.city) {
        errors.city = 'You must enter city';
    }

    if (!formProps.address) {
        errors.address = 'You must enter address';
    }

    if (!formProps.houseNumber) {
        errors.houseNumber = 'You must enter house number';
    }

    if (!formProps.email) {
        errors.email = 'You must enter email';
    }

    if (!formProps.phone) {
        errors.phone = 'You must enter phone number';
    }

    if (!formProps.organizationType) {
        errors.organizationType = 'You must choose organization type';
    }

    if (+formProps.discount > 100 || formProps.discount < 0) {
        errors.discount = 'Discount value shold be in range from 0 to 100';
    }

    return errors
}

const formWrapper = reduxForm({
    form: 'companyProfileForm',
    validate
})(CompanyProfileForm);

export default formWrapper;