import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import { MyContext } from "./component/MyContext";

function App() {
  // set default value
  const [source, setSource] = useState("_by_date?tags=story");
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search${source}&page=${page}`)
      .then((res) => {
        setItem(res.data.hits);
      })
      .catch();
  }, [source, page]);


  return (
    <MyContext.Provider
      value={{ item, setItem, source, setSource, page, setPage }}
    >
      <Header />
      <Main />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
