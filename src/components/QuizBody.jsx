
import './quizbody.css'
import { quiz } from './Data'
import { Globaldata } from '../App'
import { useContext } from 'react'

const QuizBody = () => {
    const {quest,ChangeTime,setAnswer,marks,setMarks}=useContext(Globaldata)

    const { questions } = quiz;
    const { question ,choices, correctAnswer }= questions[quest]
    
    const totalMarks=(answer)=>{
      if(answer === correctAnswer){
       setMarks(marks+1);
      }
    }


  return (
    <div className='quiz'>
        <div className="quizBody">
                <h2 className='q'>Question<span> {quest+1} </span> out of 5</h2>
                <p className='question'>{question}</p>

                {
                    choices.map((val,index)=>{
                      return (
                        <div className='answer' onClick={()=>{
                            ChangeTime();
                            setAnswer(val);
                            totalMarks(val);
                        }}>
                        <p>{val}</p>
                    </div>
                      )
                    })
                }
            
               {console.log(marks)}
        </div>
    </div>
  )
}

export default QuizBody