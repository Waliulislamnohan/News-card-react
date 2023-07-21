import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newsList, setNewsList] = useState([]);
  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response)=> response.json())
    .then((data) => {
      setNewsList(data);

    })
  })
  return (
    <div className="App">

        <img src="/logo.svg" className="App-logo" alt="logo" />
        <h1>Space News</h1>
        <div className="newsContainer">
        
        {  newsList.map((val, key) => {
            return <div id="card" key={key}> 
            {val.title}
            <img src={val.imageUrl} alt="" />
            <p>{val.summary}</p>
            <h4>{val.publishedAt}</h4>
            </div>;

          })}
        

        </div>

    </div>
  );
}

export default App;
