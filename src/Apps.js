import React, {useEffect,useState } from 'react';
import Questions from './data'
import Question from './Question';

export default  function App(){

    const [allQuestions,setAllQuestions] = useState([])

    useEffect(()=>{
        setAllQuestions(Questions.all_questions)
    },[])
    
    const elements = allQuestions.map((item)=>{
        <Question key={item.id} q ={item.question}/>
    })
    return(
        <div className='question-box'>
           {elements}
        </div>
    );
}