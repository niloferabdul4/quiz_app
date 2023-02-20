import React from 'react';
import Question from './Question';
import Answer from './Answer';
import './Main.css'
import { useContext } from 'react';
import { AppContext } from '../../App';
import { nanoid } from 'nanoid';

const Quiz = () => {   
    const {quiz,index,score,nextClick,restartGame}=useContext(AppContext)   
   
    return (
       
        <div className='container' > 
      
              <div className='quiz_container' > 
            {index<quiz.length?  
                                          
                    (
                     <>
                     <h2>Question {index+1} out of {quiz.length} </h2>
                     <Question key={nanoid()} question={quiz[index].question}   />
                     <Answer  key={nanoid()} correct_answer={quiz[index].correct_answer} answers={quiz[index].answers}  />
                     <div className='next_btn'   onClick={nextClick}>{index<quiz.length? 'Next Question' : 'Check Score' }</div>
                     </>
                    )

                    :
                    (
                    <div className='message' >
                     <h2 >Game Ended</h2>
                     <div className='score' >Your score : {score}</div>
                     <div className='reset_btn' onClick={restartGame} >Reset Quiz</div>
                    </div>
                    )
                   
         }
                    </div>
                  
              
                                          
       
        </div>
         

        
    
        
       
    );
}

export default Quiz;
