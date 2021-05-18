import React from 'react';
import Modal from "../modals/Modal";
import history from "../../utils/history";
import {connect} from "react-redux";
import QuoteForm from "../forms/QuoteForm";
import {createQuote} from "../../actions/quoteActions";

class QuoteCreate extends React.Component {

    onSubmit = formProps => {
        console.log(formProps)
        this.props.createQuote(formProps);
    }

    render() {
        return(
            <div>
                <Modal
                    header="Create new quote"
                    onDismiss={() => history.push('/')}
                >
                    <QuoteForm
                        onSubmit={this.onSubmit}
                        submitButton='Create'
                    />
                </Modal>
            </div>
        )
    }

}

export default connect(
    null,
    {createQuote})
(QuoteCreate);