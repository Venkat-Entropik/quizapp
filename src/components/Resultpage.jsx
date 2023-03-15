import React, { useContext } from 'react'
import { Globaldata } from '../App'
const Resultpage = () => {
    const {marks} =useContext(Globaldata)
  return (
    <div>
        <h1 style={{textAlign:"center",marginTop:"10px"}}>Result</h1>
        <h2 style={{textAlign:"center",marginTop:"10px"}}>Total Questions: <span>5</span></h2>
        <h2 style={{textAlign:"center",marginTop:"10px"}}>Total Score: <span>{marks}</span></h2>
        <h2 style={{textAlign:"center",marginTop:"10px"}}>Correct Answers: <span> {marks} </span></h2>
        <h2 style={{textAlign:"center",marginTop:"10px"}}>Wrong Answers : <span>{5-marks}</span></h2>
    </div>
  )
}

export default Resultpage