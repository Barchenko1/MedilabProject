import React from 'react';

class PlanDetails extends React.Component {
    render() {
        return (
            // <div>
            //     PlanName
            //     PlanType
            //     PlanCode
            //     Total monthly Health Cost
            //     Metal Tier
            //     Deductible
            //     Employer Contribution Amount
            //
            //
            // </div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">2 days ago</div>
                    <div className="description">
                        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable
                            faces, others for their tiny stature, and even others for their massive size.</p>
                        <p>Many people also have their own barometers for what makes a cute dog.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanDetails;