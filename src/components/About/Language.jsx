import React from "react";
import { RiHtml5Line } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { FaCss3 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

const Language = () => {
  const skills = [
    { name: "HTML", icon: <RiHtml5Line />, percentage: "99%" },
    { name: "CSS", icon: <FaCss3 />, percentage: "95%" },
    { name: "Javascript", icon: <TbBrandJavascript />, percentage: "60%" },
  ];

  return (
    <div>
      <ul className="text-white flex flex-wrap justify-center md:justify-between gap-14 py-5 text-xl font-bold ">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <div
              className={`progress ${
                index === 2 || index === 3
                  ? "progress3"
                  : `progress${index + 1}`
              }`}
            >
              <span
                className="title timer"
                data-from="0"
                data-to="85"
                data-speed="1800"
              >
                {skill.percentage}
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <span className="flex gap-1 justify-center items-center">
              {skill.icon}
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
