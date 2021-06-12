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
                    <div className="profile_card-item">{this.props.user.username}Username</div>
                    <div className="profile_card-item">{this.props.user.email}Email</div>
                    <div className="profile_card-item">{this.props.user.phone}Phone number</div>
                    <div className="profile_card-item">{this.props.user.nbame}qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">{this.props.user.username}Username</div>
                    <div className="profile_card-item">{this.props.user.email}Email</div>
                    <div className="profile_card-item">{this.props.user.phone}Phone number</div>
                    <div className="profile_card-item">{this.props.user.nbame}qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">{this.props.user.username}Username</div>
                    <div className="profile_card-item">{this.props.user.email}Email</div>
                    <div className="profile_card-item">{this.props.user.phone}Phone number</div>
                    <div className="profile_card-item">{this.props.user.nbame}qwewqe</div>
                </div>
                <div className="profile_card">
                    <div className="profile_card-item">{this.props.user.username}Username</div>
                    <div className="profile_card-item">{this.props.user.email}Email</div>
                    <div className="profile_card-item">{this.props.user.phone}Phone number</div>
                    <div className="profile_card-item">{this.props.user.nbame}qwewqe</div>
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