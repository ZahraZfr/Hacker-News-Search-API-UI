import React from "react";

const Search = ({ setvalue }) => {

  // function inputFunc({ setvalue}) {
  //   setvalue = "?query=`$(document.querySelector('input'))`";
  //   console.log(setvalue)
  // }
setvalue="?query=facebook";
// `${(document.getElementById('#input').value())}`
  return (
    <div className="bg-blue-500">
      <span className="text-blue-500 bg-white p-3.5 font-bold rounded-l-2xl">
        What do you want to know :{" "}
      </span>
      <input id="input"
        className="mb-5 py-3.5 px-1 mx-1 w-100 rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none"
        type="search"
        // onChange={setvalue}
      />

    </div>
  );
};

export default Search;
