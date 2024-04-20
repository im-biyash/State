import React, { useState } from "react";
import sushmita from "./assets/sushmita.png";
import bardan from "./assets/bardan.png"; 
import aman from "./assets/aman.png"; 
import sushma from "./assets/sushma.png";
import biyash from "./assets/biyash.jpg";
function Statecolor() {
  const [color, setColor] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (inputValue === "sushmitaa") {
      setColor("white");
      setImageName(sushmita);
    } else if (inputValue === "aadit") {
      setColor("white");
      setImageName(bardan);
    } 
    else if(inputValue === 'lado'){
      setColor("white");
      setImageName(aman);
    }
    else if(inputValue === 'sushma' || inputValue === 'Sushma ' || inputValue === 'susma') {
      setColor("white");
      setImageName(sushma)
    }
    else if(inputValue === 'biyas' ) {
      setColor("black");
      setImageName(biyash);
      // it change the state to biyash photo
    }
    
    
   else {
      setColor(null);
      setImageName(null);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl mb-2">Enter your first name</h1>
      <div
        className="card bg-blue-400 h-[300px] w-[250px]"
        style={{ backgroundColor: color }}
      >
        {imageName && ( // Render the image if imageName is truthy
          <img src={imageName} alt="User" className="w-full h-full object-cover" />
        )}
      </div>
      <div className="absolute bottom-10">
        <input
          type="text"
          className="py-2 relative top-[30px]  px-4 border border-gray-300 rounded-md mb-4 md:mb-0"
          onChange={handleChange}
          placeholder="Enter your first name"
        />
      </div>
    </div>
  );
}

export default Statecolor;
