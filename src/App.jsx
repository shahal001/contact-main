import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="h-auto bg-[#00040F] flex flex-col space-y-3  md:flex-row md:justify-around md:gap-5 md:w-[70%]  lg:w-[50%]  md:px-0 ">
      
      
        <form className="flex flex-col space-y-2 gap-2 p-5">
        <p className="text-4xl text-orange-300 font-semibold ">WriteUs</p>
          <input type="text" placeholder="Name" name="" id="" className="p-3 input" />
          <input
            type="email"
            placeholder="Email"
            name=""
            id=""
            className="p-2 input "
          />
          <input
            type="number"
            placeholder="Number"
            name=""
            id="" 
            className="p-2 input"
          />
        </form>

      

        <div className="flex flex-col md:w-screen ">
        <textarea
          name=""
          id=""
          cols="30"
          rows="9"
          placeholder="Message"
          className="p-4 input md:border-l"
        ></textarea>
        <button className="bg-orange-500 w-full p-2 text-white hover:bg-orange-400 active:bg-orange-600">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
