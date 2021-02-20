import React from 'react';
import {Field} from 'redux-form';

const renderRadioButton = (props) => {
    const {radioButtonValue, caption, ...field} = props;
    return (
        <label>
            <input {...field.input}
                   type="radio"
                   value={radioButtonValue}
            />
            <span>{caption}</span>
        </label>
    );
};

let RadioButton = (props) => {
    return (
        <Field {...props} component={renderRadioButton}/>
    );
};

export default RadioButton;