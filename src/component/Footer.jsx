import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Footer = () => {
  let { setPage } = useContext(MyContext);
  let { page } = useContext(MyContext);
  return (
    <div className="px-5 py-2 bg-blue-500 text-white fixed bottom-0 w-full flex justify-between  ">
      <div className="align-middle flex justify-center mt-1">
        <a className="px-2" href="">
          FQA
        </a>
        <a className="px-2" href="">
          about
        </a>
        <a className="px-2" href="">
          contact
        </a>
        <a className="px-2" href="">
          GuidLine
        </a>
      </div>
      <div>
        <button
          onClick={() => {
            if (page <= 0) {
              setPage(0);
            } else {
              setPage(page - 1);
            }
          }}
          className="bg-white text-blue-500 py-0.5 px-1.5 m-0.5 rounded"
        >
          prev
        </button>

        <button
          onClick={() => {
            setPage(page);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          {page}
        </button>

        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="bg-white text-blue-500 m-0.5 py-0.5 px-1.5  rounded"
        >
          next
        </button>
        <button
          onClick={() => {
            setPage(0);
          }}
          className="bg-blue-800 text-white-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Footer;
