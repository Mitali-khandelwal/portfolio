import React from "react";
import profile from "../../images/profile1.jpeg";

const HomeBanner = () => {
  return (
    <div className="homebanner_wrapper flex flex-col justify-center w-full py-16 h-[100vh]">
      <div className="flex  flex-col items-center justify-center gap-2">
        <img src={profile} alt="" className="w-52 h-52 rounded-full" />
        <h2 className="">Mitali Khandelwal</h2>
        <p className="text-white">
           website Designer
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
