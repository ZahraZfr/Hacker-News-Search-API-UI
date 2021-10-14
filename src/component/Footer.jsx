import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Footer = () => {
  let { setPage } = useContext(MyContext);
  let { page } = useContext(MyContext);
  return (
    <div className="px-5 py-2 grid grid-cols-1 grid-rows-2  tablet:py-2 bg-blue-500 text-white fixed bottom-0 w-full tablet:flex tablet:justify-between  ">
      <div className="hidden align-middle tablet:flex justify-center mt-1">
        <a className="px-2 " href="">
          FQA
        </a>
        <a className="px-2 " href="">
          GuidLine
        </a>
      </div>
      <div className="mx-auto tablet:mx-0 -mb-2 tablet:mb-0">
        <button
          onClick={() => {
            if (page <= 0) {
              setPage(0);
            } else {
              setPage(page - 1);
            }
          }}
          className="bg-white text-blue-500 py-0.5 px-1.5 m-0.5 rounded shadow-2xl"
        >
          Previous
        </button>

        <button
          onClick={() => {
            setPage(page);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded shadow-2xl"
        >
          {page}
        </button>

        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="bg-white text-blue-500 m-0.5 py-0.5 px-1.5  rounded shadow-2xl"
        >
          Next
        </button>
        <button
          onClick={() => {
            setPage(0);
          }}
          className="bg-blue-800 text-white-500 py-0.5 m-0.5 px-1.5 rounded shadow-2xl hover:bg-white hover:text-blue-500"
        >
          Reset
        </button>
      </div>
      <div className="align-middle flex justify-center mt-1">
        <a className="px-2" href="">
          About
        </a>
        <a className="px-2" href="">
          Contact
        </a>
        <a className="px-2 tablet:hidden" href="">
          FQA
        </a>
        <a className="px-2 tablet:hidden" href="">
          GuidLine
        </a>
      </div>
    </div>
  );
};

export default Footer;
