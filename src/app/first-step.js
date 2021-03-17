import React from "react"

const StepOne = props =>{
  const { values, onChange, next} = props
  return(
      <>
        <label name="firstName" >First Name
          <input type="text" name="firstName" value={values.firstName} onChange={onChange('firstName')}/>
        </label >
        <br />
        <br />
        <label name="lastName">Last Name
        <input type="text" name="lastName" value={values.lastName} onChange={onChange('lastName')}/>
        </label ><br />
      
      <button onClick={next}>Next</button>
    </>
  )
}
export default StepOne;