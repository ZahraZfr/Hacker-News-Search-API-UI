import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  // set default value
  const [source, setSource] = useState("_by_date?tags=story");
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search${source}`)
      .then((res) => {
        setItem(res.data.hits);
      })
      .catch();
  }, [source]);
  function showData(item) {
    return item
      .filter((item) => item.title)
      .map((news, index) => {
        return (
          <div key={index} className="p-15 p-3 text-gray-900">
            <a className="mt-5" href={news.url}>
              <p className="font-medium"> {news.title}</p>
            </a>
            <p className="font-normal text-xs">
              <span>points : {news.points}</span>
              <span> by {news.author} </span>
              <span>
                | at: {news.created_at.slice(0, 10)} | Time:{" "}
                {news.created_at.slice(12, 19)}{" "}
              </span>
            </p>
          </div>
        );
      });
  }
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* main */}
      <div className="bg-blue-500 fixed -mt-20 w-full h-20">
        <span className="text-blue-500 bg-white px-2 py-3.5 font-bold rounded-l-2xl">
          What do you want to know :{" "}
        </span>
        <input
          id="input"
          className="mb-5 px-2 mx-1 w-100 rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none h-12"
          type="search"
          onChange={(e) => {
            // get input value to search
            if (e.target.value === "") {
              setSource("_by_date?tags=story");
            } else {
              setSource(`?query=${e.target.value}}`);
            }
          }}
        />
      </div>
      <div className="bg-gray-200 mt-40 w-full">{showData(item)}</div>
      {/* footer*/}
      <Footer />
    </div>
  );
}

export default App;
