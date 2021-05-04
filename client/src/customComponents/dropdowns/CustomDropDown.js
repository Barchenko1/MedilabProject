import React from 'react';
import {Field} from "redux-form";

const renderDropDown = (props) => {
    console.log(props);
    return(
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option value=""/>
                {props.data.map(data =>
                    <option value={data} key={data}>{data}</option>)}
            </select>
            {props.renderError(props.meta)}
        </div>
    )
}

const CustomDropDown = (props) => {
    return (
        <Field {...props} component={renderDropDown}/>
    );
};

export default CustomDropDown;