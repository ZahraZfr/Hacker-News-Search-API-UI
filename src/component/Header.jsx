import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";
let timer = null;
const Header = () => {
  const { setSource } = useContext(MyContext);
  
  return (
    <div className="bg-blue-500 font-sans tablet:fixed  tablet:h-36 w-full tablet:-mt-36">
      <div className="py-5 font-bold text-3xl text-white flex justify-center ">
        Hacker News Search
      </div>
      <div className=" flex flex-col w-3/4 tablet:w-max tablet:justify-center tablet:flex-row mx-auto">
        <span className="text-blue-500 bg-white px-2 py-3.5 h-12 font-bold tablet:rounded-l-2xl w-100 box-border border-blue-500  rounded-tl-2xl text-center">
          What do you want to know :{" "}
        </span>
        <input
          id="input"
          className="mb-5 px-2 tablet:mx-1 w-100 tablet:rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none h-12 box-border rounded-br-2xl"
          type="search"
          onChange={function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
              // get input value to search

              if (document.getElementById("input").value === "") {
                setSource("_by_date?tags=story");
              } else {
                setSource(`?query=${document.getElementById("input").value}`);
              }
            }, 300);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
