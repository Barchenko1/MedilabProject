import React from 'react';
import {connect} from 'react-redux';
import CompanyProfileForm from "./CompanyProfileForm";

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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CompanyProfilePage);