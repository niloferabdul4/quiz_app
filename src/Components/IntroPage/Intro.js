import React from 'react';
import './Intro.css'
import { useNavigate } from 'react-router-dom';

const Intro = () => {

    const navigate=useNavigate()
    return (
         <div className='intro_container' >
             <div className='title' >Quizzzical</div>
             <div className='text' >Boost your Brain</div>
             <div className='start_btn' onClick={()=>{navigate(`/quiz`)}} >Start Quiz</div>
        </div>
    );
}

export default Intro;
