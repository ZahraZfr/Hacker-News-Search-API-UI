import React from "react";
import {MyContext} from "./MyContext"
import { useContext } from "react";

const Main = () => {
  let { item } = useContext(MyContext);

  return (
    <div className="bg-gray-200 tablet:mt-36 min-h-screen flex justify-center text-center flex-wrap ">
      {item
      .filter((item) => item.title)
      .map((news, index) => {
        return (
          <div key={index} className="p-15 p-3 text-gray-900 content-center w-full">
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
  );
};

export default Main;
