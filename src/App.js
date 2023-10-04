import React, {useEffect,useState } from 'react';



function App() {
  const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="container">
      
      <center>
        {data.map((dataObj, index) => {
          return (
            <div className='question-box'>
              <h3>{dataObj.question}</h3>
              <div className='answers-box'>
                <button>{dataObj.correct_answer}</button>
                <button>{dataObj.incorrect_answers[0]}</button>
                <button>{dataObj.incorrect_answers[1]}</button>
                <button>{dataObj.incorrect_answers[2]}</button>
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