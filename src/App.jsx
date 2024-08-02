import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"
import bg from "./Assets/bg.jpg"
import InputBox from "./components/InputBox";


function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat bg-center bg-cover w-full h-screen flex justify-center items-center">
      <div className="bg-[#ffffff58] backdrop-blur-md border-2 border-[#ffffff70] md:w-[600px] rounded-xl p-4">
        <div className="relative">
          <InputBox lable="From" margin="10px" />
          <InputBox lable="To" margin="20px" />
          <button className="absolute left-1/2 transition-all hover:bg-cyan-500 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 py-1 text-white px-4 rounded-lg border-white border-2">SWAP</button>
        </div>
        <button className="bg-cyan-400 transition-all hover:bg-cyan-500 text-white w-full rounded-xl py-3">Convert USD to RUP</button>
      </div>
    </div>
  )
}

export default App
