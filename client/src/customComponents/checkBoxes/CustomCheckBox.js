import React from 'react';

import {Field} from 'redux-form';

const renderCheckBox = (props) => {
    const {checkBoxValue, caption, ...field} = props;
    console.log(props)
    return (
        <div>
            <label>
                <input {...field.input}
                       type="checkbox"
                       checked={props.input.value}
                       onChange={props.input.onChange}
                />
                <span>{caption}</span>
            </label>
            {props.renderError(props.meta)}
        </div>
    );
};

const CustomCheckBox = (props) => {
    return (
        <Field {...props} component={renderCheckBox}/>
    );
};

export default CustomCheckBox;