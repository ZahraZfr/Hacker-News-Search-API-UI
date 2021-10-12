import React from "react";

const Main = ({ item }) => {
  // const users = props.users;
  // console.log(props, users)
  return (
    <ul className="bg-gray-200 pt-5">
      <span className="bg-red-700 px-2.5 rounded-2xl mr-2"></span>
      <span className="my-15 font-extrabold font-sanse text-xl">
        Recently news
      </span>
      {item.map((news, index) => {
        return (
          <div key={index} className="border-blue-900 p-15 p-3 text-gray-900">
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
    </ul>
  );
};

export default Main;
