import React from "react";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const Footer = () => {
  let { setPage } = useContext(MyContext);
  return (
    <div className="px-5 py-2 bg-blue-500 text-white fixed bottom-0 w-full flex justify-between">
      <div>
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
            setPage(0);
          }}
          className="bg-white text-blue-500 py-0.5 px-1.5 m-0.5 rounded"
        >
          prev
        </button>
        <button
          onClick={() => {
            setPage(1);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          1
        </button>
        <button
          onClick={() => {
            setPage(2);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          2
        </button>
        <button
          onClick={() => {
            setPage(3);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          3
        </button>
        <button
          onClick={() => {
            setPage(4);
          }}
          className="bg-white text-blue-500 py-0.5 m-0.5 px-1.5 rounded"
        >
          4
        </button>
        <button
          onClick={() => {
            setPage(5);
          }}
          className="bg-white text-blue-500 m-0.5 py-0.5 px-1.5  rounded"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Footer;
