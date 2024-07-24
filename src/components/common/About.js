import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Experience from "../About/Experience";
import Certificate from "../About/Certificate";
import Language from "../About/Language";
import Expertise from "../About/Expertise";
import Framework from "../About/Framework";

const About = () => {
  return (
    <div className="w-[100vw] flex justify-center items-center flex-col">
      <div className=" flex justify-around items-center pb-12 pt-44 w-full flex-wrap gap-4 ">
        <div className="text-pink-700 text-7xl">About Me</div>
        <div className="gradient-border text-white p-6 w-[50vw] flex flex-col gap-3">
          <h1 className="text-6xl">
            Who am I <span className="text-pink-700">?</span>
          </h1>
          <p>
            I am a website designer who combines creativity, technical
            expertise, and a user-centric approach to craft exceptional digital
            experiences.
          </p>
        </div>
      </div>
    
      {/* language */}
      <div className="py-6">
        <h3 className="text-white text-3xl font-semibold py-3 text-center">
          Language
        </h3>
        <Language />
      </div>
      <div className="flex flex-wrap gap-8 md:gap-44" > 
        <div>
          <h3 className="text-white text-3xl font-semibold py-3 text-center md:text-left">
            Area of Expertise
          </h3>
          <Expertise />
        </div>

        <div className="w-full md:w-fit">
        <h3 className="text-white text-3xl font-semibold py-3 text-center md:text-left ">
         Framework
        </h3>
        <Framework/>
        </div>
      </div>
      <div className="flex w-[56vw] gap-16 flex-wrap py-14">
        {/* contact */}
        <div>
          <h3 className="text-white text-3xl font-semibold py-3">Contact</h3>
          <ul className="text-white flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <SlSocialLinkedin />
              <a href="https://www.linkedin.com/in/mitali-khandelwal-106250251/">
                https://www.linkedin.com/in/mitali-khandelwal-106250251/
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline />
              <a href="tel:+91 8955168159"> 8955165159</a>
            </li>
            <li className="flex items-center gap-2">
              <CgMail />
              <a href="mailto:mitalikh2001@gmail.com">
                {" "}
                mitalikh2001@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div>
          <h3 className="text-white text-3xl font-semibold py-3">Experience</h3>
          <Experience />
        </div>
      </div>
   
      {/* certificate */}
      <div className="flex flex-col items-center justify-center py-3">
        <h3 className="text-white text-5xl font-semibold py-3">Certificate</h3>
        <Certificate />
      </div>
    </div>
  );
};

export default About;
