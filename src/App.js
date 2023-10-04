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
    <div className="App">
      
      <center>
        {data.map((dataObj, index) => {
          return (
            <div>
              <p>{dataObj.question}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;