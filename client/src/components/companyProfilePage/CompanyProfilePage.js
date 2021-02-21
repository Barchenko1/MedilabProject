import React from 'react';
import {connect} from 'react-redux';
import CompanyProfileForm from "../forms/CompanyProfileForm";
import CustomButton from "../../customComponents/buttons/CustomButton";
import {ADD_EMPLOYEES_PAGE, HOME_PAGE} from "../../utils/consts";

class CompanyProfilePage extends React.Component {

    onSubmit = (formProps) => {

    }

    render() {
        return (
            <div>
                <h2>CompanyProfilePage</h2>
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
                <div className="buttonContainer">
                    <CustomButton styleProp={{textAlign: 'left'}} name="Previous" to={HOME_PAGE}/>
                    <CustomButton styleProp={{textAlign: 'right'}} name="Continue" to={ADD_EMPLOYEES_PAGE}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CompanyProfilePage);