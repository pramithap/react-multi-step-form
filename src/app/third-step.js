import React from "react"

const StepThree = props =>{
  const { values, onChange, onSubmit, back} = props
  return(
      <>
        <label name="email" >Email Address </label >
        <input type="email" name="email" value={values.email} onChange={onChange('email')}/>
        <br />
        <br />
        <label name="phone">Phone No &nbsp; &nbsp; &nbsp; &nbsp;</label >
        <input type="text" name="phone" value={values.phone} onChange={onChange('phone')}/>
        <br />
        <br />
        <button className="back" onClick={back}>back</button> 
        <button className="next" onClick={onSubmit}>submit</button>
    </>
  )
}
export default StepThree;