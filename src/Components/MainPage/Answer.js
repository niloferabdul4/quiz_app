import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';


const Answer = ({correct_answer,answers}) => {
    
  const {score,setScore,selected,setSelected}=useContext(AppContext)

  const handleCheck=(answerItem)=>
  {   
        setSelected(answerItem)      
        if(answerItem===correct_answer)
         {
          setScore(score+1)
         }        
  }

  /*************  Select Function  **************/

  const handleSelect=(answerItem)=>
  {   
        if(selected===answerItem && selected===correct_answer)      
         {
        
          return 'green_btn'
         }
        else if(selected===answerItem && selected!==correct_answer)
         {        
          return 'red_btn'
         }
       
         else if(answerItem===correct_answer)
         {

          return 'green_btn'
        
         }
           
  }
 
    return ( 
               
        <div className='ans_wrapper' >
            {answers.map((answerItem,id)=>{return  <button   key={id}  
                                                             disabled={selected}
                                                             className={`btn ${selected && handleSelect(answerItem)}`}   
                                                             onClick={()=>handleCheck(answerItem)}  
                                                    >{answerItem}</button>})}                  
        </div>  

    );
}

export default Answer;
