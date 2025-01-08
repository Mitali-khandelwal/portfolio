import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import cv from '../../images/mitali-designer.jpg'
import { HiOutlineDocumentText } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="py-5">
      <div className="flex justify-around p-4">
        <ul className="text-white flex w-full justify-around flex-wrap  gap-3">
          <li className="flex items-center gap-2">
            <SlSocialLinkedin />
            <a href="https://www.linkedin.com/in/mitali-khandelwal-106250251/">
              https://www.linkedin.com/in/mitali-khandelwal-106250251/
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CgMail />
            <a href="mailto:mitalikh2001@gmail.com" className="p-1"> mitalikh2001@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
        <HiOutlineDocumentText/>
            <a href={cv} download> Download CV</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center text-gray-600 pb-4">
          DWD | Design With Designer | Designed by Mitali Khandelwal
        </p>
      </div>
    </div>
  );
};

export default Footer;
