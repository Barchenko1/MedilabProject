import React from 'react';
import {Field} from "redux-form";

const renderInput = (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return(
        <div className={className}>
            <label>{formProps.label}</label>
            <input
                type={formProps.type}
                onChange={formProps.input.onChange}
                value={formProps.input.value} autoComplete="off"
            />
            {formProps.renderError(formProps.meta)}
        </div>
    )
}

const CustomInput = (props) => {
    return (
        <Field {...props} component={renderInput}/>
    );
}

export default CustomInput;