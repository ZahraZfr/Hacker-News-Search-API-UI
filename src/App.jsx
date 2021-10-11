import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then((res) => {
        setUsers(res.data.hits);
        // console.log(res.data.hits);
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main users = {users}/>
      <Footer />
    </div>
  );
}

export default App;



