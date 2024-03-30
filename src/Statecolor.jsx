import React, { useState } from "react";
import sushmita from "./assets/sushmita.png";



function Statecolor() {
  const [color, setColor] = useState(null);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (inputValue === "sushmita") {
      setColor("white");
    } else {
      setColor(null);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-">Enter your first name</h1>
      <div
        className="card bg-blue-200 h-[300px] w-[250px]"
        style={{ backgroundColor: color }}
      >
        {color === "white" && (
          <img src={sushmita} alt="Sushmita" className="w-full h-full object-cover" />
        )}
      </div>
      <div className="absolute bottom-10">
        <input
          type="text"
          className=" py-2 border border-gray-300 rounded-md mb-6 md:mt-4 sm:mt-6"
          onChange={handleChange}
          placeholder="Enter first name"
        />
      </div>
    </div>
  );
}

export default Statecolor;
