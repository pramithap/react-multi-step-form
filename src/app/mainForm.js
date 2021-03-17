import React from "react"
import StepCounter from "./steps";
import StepOne from "./first-step";
import StepTwo from "./second-step";
import StepThree from "./third-step";

export default class App extends React.Component {
  
  state = {
    stepNumber: 1,
    firstName: "",
    lastName: "",
    widgetName: "",
    widgetColour : "",
    email: "",
    phone:"",
    success: false  
  };

  next = () => {
    this.setState(prevState => {
      return {stepNumber: prevState.stepNumber + 1
    }})
  };

  back = () => {
    this.setState(prevState => {
      return {stepNumber: prevState.stepNumber - 1
    }})
  };

  onChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  };
  
  onSubmit = () =>{
    this.setState({
      success: true
    }, () => this.next())
  };

  renderStepForm(stepNumber, values) {
    switch (stepNumber) {
      case 1:
        return (
          <StepOne 
          values = {values} 
          onChange = {this.onChange}
          next = {this.next}
          />
        )
      case 2:
        return (
          <StepTwo 
          values = {values} 
          onChange = {this.onChange}
          next = {this.next}
          back = {this.back}
          />
        )
      case 3:
        return (
          <StepThree
          values = {values} 
          onChange = {this.onChange}
          back = {this.back}
          onSubmit = {this.onSubmit}
          />
        )
      case 4: 
        return (<submittedForm success = {values.success}/>)
      default:
        return (
          <StepOne 
          values = {values} 
          onChange = {this.onChange}
          next = {this.next}
          />
        )

  } //end switch
}

render(){
    
    const { firstName, lastName, email, phone, widgetName, widgetColour, success } = this.state;
    const values = { firstName, lastName, email, phone, widgetName, widgetColour, success };
    const { stepNumber } = this.state;
    
    return (
      <div>
        <StepCounter></StepCounter>
        <br></br>
        {this.renderStepForm(stepNumber, values)}</div>
    );
 
  } //end render

}






