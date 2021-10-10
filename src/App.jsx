import './App.css';
import axios from 'axios';
import { useEffect , useState } from "react";
import React from "react";
function App() {
  const [users , setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://hn.algolia.com/api/v1/search?query=")
    .then(res => {
      setUsers(res.data.hits);
      console.log(res.data.hits);
    })
    .catch();
  },[]);


  return (
    <div className="App">
      <ul>
        {users.map(news =>{
          return <div><a href= {news.url}><p key={news.id}> {news.title}</p></a><p>{news.author}</p> </div>
                  
        })}
      </ul>
    </div>
  );
}

export default App;
