import React from "react"

const SubmittedForm = props =>{
  const {success, reset} = props
  return(
      <>
        <label name="success" >{success ? 'Success!!!' : 'Error!'} </label>
        <div>
        <button className="home" onClick={reset}> Home </button>
        </div>
    </>
  )
}
export default SubmittedForm;