import React from "react";
import {connect} from 'react-redux';

class QuoteOverviewPage extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                QuoteOverviewPage
            </div>
        );
    }
}

const mapStateToProps = state => {

}

export default connect()(QuoteOverviewPage);