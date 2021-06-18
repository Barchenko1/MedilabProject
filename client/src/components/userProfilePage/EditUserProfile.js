import React from 'react'
import {connect} from "react-redux";
import UserProfileForm from "../forms/UserProfileForm";

class EditUserProfile extends React.Component {

    render() {
        return(
            <div>
                <UserProfileForm/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}


export default connect(
    mapStateToProps,
    {  }
)(EditUserProfile);