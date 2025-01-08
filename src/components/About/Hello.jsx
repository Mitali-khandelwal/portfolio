import React from "react";
import profile from '../../images/profile3.jpeg'
import { useNavigate } from "react-router-dom";

const Hello = () => {
const nav  = useNavigate()

const handleNavigate = () => {
    nav('/about')
}

  return (
    <div className="flex justify-center md:justify-around items-center flex-wrap-reverse gap-8">
      <div className="flex flex-col gap-8 ">
        <h1 className="font-extrabold text-4xl text-pink-700 text-center md:text-left">
          Hello, <br />
          <span className="text-white">I am {" "}
            <span className="text-pink-700">
            Mitali khandelwal !
              </span>
           </span>
        </h1>
        <p className="w-[28rem] text-justify px-8 md:px-0">
          As an accomplished web developer with 2 years of professional
          experience, I possess a robust skill set that includes expertise in
          React, HTML, CSS, Bootstrap, Material-UI (MUI), Tailwind CSS, and
          SASS. My background demonstrates a strong commitment to delivering
          high-quality web solutions, leveraging modern technologies and
          frameworks to create responsive, user-friendly interfaces. My ability
          to seamlessly integrate these tools ensures that I can build visually
          appealing and highly functional web applications, tailored to meet the
          diverse needs of clients and end-users.
        </p>

        <button className="w-fit border p-4 ml-8 md:ml-0" onClick={handleNavigate}> Explore More</button>
      </div>
      <div>
        <div className="flex  flex-col items-center justify-center gap-2 relative">
          <img src={profile} alt="" className="w-[20rem] h-[30rem] rounded-sm " />
          <p className="text-white">Website Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
