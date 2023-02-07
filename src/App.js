
import Intro from "./Components/IntroPage/Intro";
import Quiz from "./Components/MainPage/Quiz";
import './App.css'
import { useState,useEffect } from "react";
import { createContext } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export const AppContext=createContext()

function App() {

  const [quiz,setQuiz]=useState([])
  const [index,setIndex]=useState(0)
  const [score,setScore]=useState(0)
  const [selected,setSelected]=useState()
 

  useEffect(()=>{fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
  .then(res=>res.json())
  .then(data=>{
        const quiz_Elem=data.results.map(items=>({...items,answers:([items.correct_answer,...items.incorrect_answers].sort(()=>Math.random()-0.5))}))
 setQuiz(quiz_Elem)

  })},[])
  
  const nextClick=()=>
  {
   
    if(index<=quiz.length)   
     {
        
        setIndex(index=>index+1) 
        
        setSelected('') 
       
    }          
 } 
 
 const restartGame=()=>
 {
  setIndex(0);
  setScore(0)
 }
  return (
    
       <BrowserRouter>          
            <AppContext.Provider value={{quiz,setQuiz,index,setIndex,score,setScore,nextClick,restartGame,selected,setSelected}}>
                <Routes>
                    <Route path='/' element={<Intro />} />
                    <Route path='/quiz' element={<Quiz />} />
                </Routes>
            </AppContext.Provider> 
       </BrowserRouter>
 
  );
}

export default App;
