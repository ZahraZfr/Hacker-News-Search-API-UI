import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500 font-sans ">
      <div className="py-5 font-bold text-3xl text-white">Hacker News Search</div>
      <div>
     <div>
     <span className="text-blue-500 bg-white p-3.5 font-bold rounded-l-2xl">What do you want to know : </span>
      <input className="mb-5 py-3.5 px-1 mx-1 w-100 rounded-r-2xl text-blue-500 font-bold border-blue-500 outline-none"  type="text" />
     </div>
      </div>
      
    </div>
  );
};

export default Header;
