import React from 'react';
import {Link} from "react-router-dom";

const CustomButton = (props) => {
    return(
        <div style={props.styleProp}>
            <Link to={props.to} className='buttonContainer_prev'>
                {props.name}
            </Link>
        </div>
    )
}

export default CustomButton