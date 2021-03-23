import React from 'react';

const Feedback =(props)=>{
    return (
        <div className="ml-4">
            <h3 className="mb-12">Customer Feedback Details</h3>

            <h5>Name of Customer</h5>
            <p>{props.feedbackDetails.name}</p>

            <h5>Email</h5>
            <p>{props.feedbackDetails.email}</p>

            <h5>Reason of Change</h5>
            <p>{props.feedbackDetails.reason}</p>

            <h5>Description</h5>
            <p>{props.feedbackDetails.description}</p>
        </div>
    )
}

export default Feedback;