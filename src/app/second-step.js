import React from "react"

const StepTwo = props =>{
  const { values, onChange, next, back} = props
  return(
      <>
        <label name="wcolour" >Widget Colour
          <input type="text" name="wcolour" value={values.wcolour} onChange={onChange('wcolour')}/>
        </label >
        <br />
        <br />
        <label name="wsize">Widget Size
        <input type="text" name="wsize" value={values.wsize} onChange={onChange('wsize')}/>
        </label ><br />
      
      <button onClick={back}>back</button> 
      <button onClick={next}>Next</button>
    </>
  )
}
export default StepTwo;