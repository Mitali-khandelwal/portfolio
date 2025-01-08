import React from "react";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";

const Experience = () => {
  return (
    <div>
      <ul className="text-white flex flex-col gap-3">
        <li className="flex items-center gap-2 text-pink-700 font-extrabold">
          <span className="text-white">
          <PiSuitcaseSimpleThin />

          </span>
         Jan 2023 - Dec 2024
        </li>
        <li className="flex flex-col">
          <h3 className="font-bold">Website Designer or CSS Animator</h3>

          <span>:- DeepOrion Technology Private Limited</span>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
