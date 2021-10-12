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

  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* main */}
      <div className="bg-gray-200">
        <div className="bg-blue-500">
          <span className="text-blue-500 bg-white p-3.5 font-bold rounded-l-2xl  ">
            What do you want to know :{" "}
          </span>
          <input
            id="input"
            className="mb-5 py-3.5 px-2 mx-1 w-100 rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none"
            type="search"
            onChange={() => {
              // get input value to search
              setSource(`?query=${document.getElementById("input").value}}`);
            }}
          />
        </div>

        {item.map((news, index) => {
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
        })}
      </div>
      {/* footer*/}
      <Footer />
    </div>
  );
}

export default App;
