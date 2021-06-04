import React from 'react'
import {connect} from "react-redux";
import {getProfile} from "../../actions/authActions";

class UserProfilePage extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <div>
                {this.props.user.username}
                {this.props.user.email}
                {this.props.user.phone}
                {this.props.user.nbame}
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