import './App.css';
import axios from 'axios';
import { useEffect , useState } from "react";
import React from "react";
function App() {
  const [users , setUsers] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setUsers(res.data);
    })
    .catch();
  },[]);

  return (
    <div className="App">
      <ul>
        {users.map(users =>{
          return <li key={users.id}>{users.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
