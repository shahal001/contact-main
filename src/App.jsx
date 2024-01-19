import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen px-4 bg-[#00040F]">
      <div className="bg-gray-800   md:flex md:items-center md:justify-center md:gap-16 md:h-96 space-y-2">
        <form className="flex  flex-col flex-wrap items-center justify-center  md:space-y-6">
          <div className=" text-6xl  font-semibold text-white p-3 px-2 ">
            <h1 className=""> Write Us</h1>
          </div>
          <div className="w-32 h-1  rounded bg-yellow-500 "></div>
          {/* <h1 className="text-yellow-500 px-6">______________</h1> */}
          <input
            type="text"
            placeholder="Name"
            className="p-2  pt-8 text-white w-[80%] border-b bg-transparent outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 pt-6 text-white w-[80%]  border-b bg-transparent outline-none"
          />
          <input
            type="number"
            placeholder="Phone"
            className="p-2 pt-6 text-white w-[80%]  border-b bg-transparent outline-none"
          />
        </form>
        <div className="flex  md:border-l  flex-col justify-center items-center  space-y-2">
          <textarea
            cols="39"
            rows="11"
            placeholder="Message"
            className="p-2 w-[80%] md:mt-8  text-white outline-none  bg-transparent"
          ></textarea>
          <button className="bg-yellow-500 p-2 w-[100%]   ">submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
