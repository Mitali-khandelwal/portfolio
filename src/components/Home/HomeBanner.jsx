import React from "react";
import profile from "../../images/profile1.jpeg";
import TechnicalSkills from "../About/TechnicalSkills";
import Hello from "../About/Hello";

const HomeBanner = () => {
  return (
    <div className="homebanner_wrapper flex flex-col justify-center w-full pt-36 pb-9 overflow-x-hidden">
      {/* intro */}
      <Hello />

      {/* Technical skills */}
      <div>
        <TechnicalSkills />
      </div>
    </div>
  );
};

export default HomeBanner;
