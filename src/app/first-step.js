import React from "react"

const StepOne = props =>{
  const { values, onChange, next} = props;
  return(
      <>
        <label name="firstName" >First Name </label >
          <input type="text" name="firstName" value={values.firstName} onChange={onChange('firstName')}/>
        <br />
        <br />
        <label name="lastName">Last Name </label >
        <input type="text" name="lastName" value={values.lastName} onChange={onChange('lastName')}/>
        <br></br>
        <br></br>
        <button className="next" onClick={next}>Next</button>
    </>
  )
}
export default StepOne;