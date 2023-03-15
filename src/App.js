
import { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Resultpage from './components/Resultpage';
import QuizBody from './components/QuizBody';
import { Routes, Route } from "react-router-dom";
import {useNavigate} from "react-router-dom"
export const Globaldata=createContext()
function App() {
  const[quest,setquest]=useState(0);
  const[answer,setAnswer]=useState("");
  const[marks,setMarks]=useState(0);
  const navigate=useNavigate();
  const ChangeTime=()=>{
    if(quest===4){
      navigate('/result')
    }
    setTimeout(()=>{
      setquest(quest+1)
    },2000)
  }
 
  return (
    <div className="App">
     
      <Globaldata.Provider value={{quest,setquest,ChangeTime,answer,setAnswer,marks,setMarks}}>
      <h1 className='projectTitle'>Quiz App</h1>
      <h3 className='currentScore'>Current Score :<span className='score'>{marks}</span></h3>
      <QuizBody/>
      {/* <Resultpage/> */}
      <Routes>
        <Route path='/result' element={<Resultpage/>}/>
        </Routes>
      </Globaldata.Provider>
    </div>
  );
}

export default App;
