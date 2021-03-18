import React from "react"

const StepTwo = props =>{
  const { values, onChange, next, back} = props
  return(
      <>
        <label name="wcolour" >Widget Colour</label >
        <input type="text" name="wcolour" value={values.wcolour} onChange={onChange('wcolour')}/>   
        <br />
        <br />
        <label name="wsize">Widget Size  &nbsp; </label >
        <input type="text" name="wsize" value={values.wsize} onChange={onChange('wsize')}/>
        <br></br>
        <br></br>
        <button className="back" onClick={back}>back</button> 
        <button className="next" onClick={next}>Next</button>
    </>
  )
}
export default StepTwo;