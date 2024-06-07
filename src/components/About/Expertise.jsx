import React from "react";

const Expertise = () => {
  return (
    <div className="text-white flex gap-4 w-2/3 flex-wrap ">
      <p className="border border-pink-700 px-5 py-2 rounded hover:bg-white hover:text-pink-700 hover:border-black transition-all duration-300 delay-150">
        Tailwind
      </p>
      <p className="border border-pink-700 px-5 py-2 rounded hover:bg-white hover:text-pink-700 hover:border-black transition-all duration-300 delay-150">
        Bootstrap
      </p>{" "}
      
      <p className="border border-pink-700 px-5 py-2 rounded hover:bg-white hover:text-pink-700 hover:border-black transition-all duration-300 delay-150">
        SASS
      </p>{" "}
      <p className="border border-pink-700 px-5 py-2 rounded hover:bg-white hover:text-pink-700 hover:border-black transition-all duration-300 delay-150">
        MUI
      </p>
    </div>
  );
};

export default Expertise;
