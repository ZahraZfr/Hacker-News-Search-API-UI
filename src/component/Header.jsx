import React from "react";
import {MyContext} from "./MyContext"
import { useContext } from "react";

const Header = () => {
  const {setSource} = useContext(MyContext)
  return (
    <div className="bg-blue-500 font-sans fixed h-36 w-full -mt-36">
      <div className="py-5 font-bold text-3xl text-white flex justify-center ">
        Hacker News Search
      </div>
      <div className="flex justify-center">
        <span className="text-blue-500 bg-white px-2 py-3.5 h-12 font-bold rounded-l-2xl">
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
    </div>
  );
};

export default Header;
