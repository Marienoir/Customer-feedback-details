import React, { Component } from 'react';
import Input from "./input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import Feedback from './Feedback';

class ComplaintsForm extends Component{
    constructor(props){
        super(props);
        this.state={
            fullName:"",
            email:"",
            reason:"",
            reasonOptions:[
                "My Card was expired",
                "My account was debited erroneously",
                "My transactions failed",
                "Others"
            ],
            feedbackDetails:null,
            showFeedbackDetails:false,

        };
        
    }
    //handleFullNameChange=(event)=>{
    //   this.setState({fullName:event.target.value})
    //    console.log(this.state.fullName)
    //};
    //handleEmailChange=(event)=>{
    //    this.setState({email:event.target.value})
    //    console.log(this.state.email)
    //};
    //handleReasonChange=(event)=>{
    //    this.setState({reason:event.target.value})
    //    console.log(this.state.reason)
    //}

    handleInputChange = (event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleComplaintSubmission=(event)=>{
        event.preventDefault();
        const{fullName,email,reason,description}=this.state;

        const feedbackDetails={
            name: fullName,
            email: email,
            reason: reason,
            description: description,
        };

        if(fullName!=="" && email!=="" && reason !=="" && description !== ""){
            this.setState({
                feedbackDetails:feedbackDetails,
                showFeedbackDetails:true
            })
        }
       
    }
    handleFormReset=(event)=>{
        event.preventDefault();

        this.setState({
            fullName:"",
            email:"",
            reason:"",
            description:"",
            showFeedbackDetails:false,
        })
    }
    render(){
        return(
            <div className="row mt-1">
                <form className="col-md-6">
                    
                    <Input
                     name="fullName"
                     title="Full Name"
                     inputType="text"
                     placeholder="Enter your full name"
                     handleChange={this.handleInputChange}
                     value={this.state.fullName}
                    />
                    <Input
                     name="email"
                     title="Email"
                     inputType="text"
                     placeholder="Enter your email address"
                     handleChange={this.handleInputChange}
                     value={this.state.email}
                    />
                    <Select
                    title="Reason of Change"
                    name="reason"
                    value={this.state.reason}
                    options={this.state.reasonOptions}
                    handleChange={this.handleInputChange}
                    placeholder="Select a reason"
                    />
                    <TextArea
                    title="Description"
                    name="description"
                    rows={10}
                    cols={10}
                    value={this.state.description}
                    handleChange={this.handleInputChange}
                    placeholder="Enter a description"
                    />
                    <Button
                    title="Submit complaint"
                    backgroundColor="#27ae60"
                    onButtonClick={this.handleComplaintSubmission}
                    />
                    <Button
                    title="Reset Form"
                    backgroundColor="#7f8c8d"
                    onButtonClick={this.handleFormReset}
                    />
                </form>
                {this.state.showFeedbackDetails && (
                <div className="col-md-6">
                <Feedback
                feedbackDetails={this.state.feedbackDetails}/>
                </div>
                )}
            </div>
        )
    }
}

export default ComplaintsForm;