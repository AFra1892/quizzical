import React, {useEffect,useState } from 'react';
import Questions from './data'
import Answer from './Answer';



function App() {
  // const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";


  

//geting data from api
  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(
  //       d.results,
  //      ))
  // }

 
  // useEffect(() => {
  //   fetchInfo();
  // }, []);






  const [data, setData] = useState([]);
  const [isColored,setIsColored] = useState(false)

  useEffect(()=>{
    setData(Questions.all_questions)

  },[])




function handle(id){
  setData(oldData=>oldData.map(item=>{
     const shit = item.id+"1" === id ?
      {...item , isHeld : !item.correct_answer[1]}:
      item
    // console.log(item.correct_answer[1]);
  }))
  
}






const elements = data.map((item)=>{
 
})







  return (
    
    <div className="container">
      
      <center>
        {data.map((dataObj) => {
          return (
            <div className='question-box'>
              <h3>{dataObj.question}</h3>
                <div className='answers-box'>
                  
                   
                  

                 <button   onClick={()=>handle(dataObj.id + "1")} >{dataObj.correct_answer[0]}</button>
                 <button  onClick={()=>handle(dataObj.id + "2")} >{dataObj.incorrect_answers[0]}</button>
                 <button  onClick={()=>handle(dataObj.id + "3")} >{dataObj.incorrect_answers[1]}</button>
                 <button  onClick={()=>handle(dataObj.id + "4")} >{dataObj.incorrect_answers[2]}</button>

                 {/* <Answer handle={()=>handle(dataObj.id + "1")} val={dataObj.correct_answer} colored={dataObj.correct_answer[1]} /> */}
                 </div>
              <hr/>
            </div>
          );
        })}
        <button className='check-btn'>Check Answer</button>
      </center>
    </div>
  );
}

export default App;