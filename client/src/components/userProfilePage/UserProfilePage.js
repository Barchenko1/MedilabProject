import React from 'react'
import {connect} from "react-redux";
import {getProfile} from "../../actions/authActions";
import  "./UserProfilePage.scss";

class UserProfilePage extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <div className="profile">
                <div className="profile_card">
                    <div className="profile_card-item">Username: {this.props.user.username}</div>
                    <div className="profile_card-item">Email: {this.props.user.email}</div>
                    <div className="profile_card-item">Phone number: {this.props.user.phone}</div>
                </div>
                <button className="profile_button">Edit</button>
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
    { getProfile }
)(UserProfilePage);