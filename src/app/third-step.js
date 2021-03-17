import React from "react"

const StepThree = props =>{
  const { values, onChange, next, back} = props
  return(
      <>
        <label name="email" >Email
          <input type="email" name="email" value={values.email} onChange={onChange('email')}/>
        </label >
        <br />
        <br />
        <label name="phone">Phone No
        <input type="text" name="phone" value={values.phone} onChange={onChange('phone')}/>
        </label ><br />
    
      <button onClick={back}>back</button>
      <button onClick={next}>Next</button>
    </>
  )
}
export default StepThree;