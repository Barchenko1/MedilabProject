import React from 'react';
import {connect} from 'react-redux';
import CompanyProfileForm from "../forms/CompanyProfileForm";
import CustomButton from "../../customComponents/buttons/CustomButton";
import {ADD_EMPLOYEES_PAGE, HOME_PAGE} from "../../utils/consts";
import {saveUpdateCompanyProfile} from "../../actions/companyProfileActions";
import "../PagesHeader.scss";

class CompanyProfilePage extends React.Component {

    onSubmit = (formProps) => {
        console.log(this.props.quote);
        this.props.saveUpdateCompanyProfile(formProps, this.props.quote.quoteId);
    }

    render() {
        return (
            <div>
                <h2 className="page_header">CompanyProfilePage</h2>
                <CompanyProfileForm
                    onSubmit={this.onSubmit}
                    initialValues={
                        {
                            medical: true,
                            dental: false,
                            vision: false,
                            life: false
                        }
                    }
                />
                {/*<div className="navbtns">*/}
                {/*    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={HOME_PAGE}/>*/}
                {/*    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={ADD_EMPLOYEES_PAGE}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quote: state.quoteReducer.quote
    }
}

export default connect(
    mapStateToProps,
    {saveUpdateCompanyProfile})
(CompanyProfilePage);