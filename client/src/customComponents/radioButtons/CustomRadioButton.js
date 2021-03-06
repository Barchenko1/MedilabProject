import React from 'react';
import {Field} from 'redux-form';

const renderRadioButton = (props) => {
    const {radioButtonValue, caption, ...field} = props;
    return (
        <div>
            <label>
                <input {...field.input}
                       type="radio"
                       value={radioButtonValue}
                       onChange={props.input.onChange}
                />
                <span>{caption}</span>
            </label>
            {props.renderError(props.meta)}
        </div>
    );
};

const CustomRadioButton = (props) => {
    return (
        <Field {...props} component={renderRadioButton}/>
    );
};

export default CustomRadioButton;