import React from "react";
import {MyContext} from "./MyContext"
import { useContext } from "react";

const Footer = () => {
    let { setPage } = useContext(MyContext);
    return ( 
        <div className="px-5 py-2 bg-blue-500 text-white fixed bottom-0 w-full flex justify-between" >
            <div>
                <a className="px-2" href="">FQA</a>
                <a className="px-2" href="">about</a>
                <a className="px-2" href="">contact</a>
                <a className="px-2" href="">GuidLine</a>
            </div>
            <div>
                <button onClick={()=>{setPage("1")}}>1</button>
                <button onClick={()=>{setPage("2")}}>2</button>
                <button onClick={()=>{setPage("3")}}>3</button>
                <button onClick={()=>{setPage("4")}}>4</button>
            </div>
        </div>
     );
}
 
export default Footer;