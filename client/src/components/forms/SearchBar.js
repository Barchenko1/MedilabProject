import React from 'react';
import {reduxForm} from "redux-form";
import CustomInput from "../../customComponents/inputs/CustomInput";

class SearchBar extends React.Component {

    state = {term: ''};

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return(
                <div>
                    {meta.error}
                </div>
            )
        }
    }

    onInputChange = (event) => {
        this.setState({term : event.target.value});
    };

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.term !== this.state.term && this.state.term.length > 2) {
    //         console.log(this.state.term);
    //         this.props.onFormSubmit(this.state.term);
    //     }
    // }

    onFormSubmit = formProps => {
        // event.preventDefault();
        this.props.onFormSubmit(formProps);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form">
                    <div className="field">
                        {/*<label>{this.props.label}</label>*/}
                        {/*<input type="text"*/}
                        {/*name="quoteName"*/}
                        {/*value={this.state.term}*/}
                        {/*onChange={this.onInputChange}/>*/}
                        <CustomInput
                            groupStyle="form_item"
                            labelStyle='form_label'
                            inputStyle='form_input'
                            name="quoteName"
                            type="text"
                            renderError={this.renderError}
                            label={this.props.label}/>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = (formProps) => {
    const errors = {};

    return errors
}

const formWrapper = reduxForm({
    form: 'searchBar',
    validate
})(SearchBar);

export default formWrapper;
