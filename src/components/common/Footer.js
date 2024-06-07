import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  const data = [
    {
      id: 1,
      icon: <CgMail />,
      con: "mitalikh2001@gmail.com",
    },
    {
      id: 2,
      icon: <SlSocialLinkedin />,
      con: "https://www.linkedin.com/in/mitali-khandelwal-106250251/",
    },

    {
      id: 3,
      icon: <IoCallOutline />,
      con: "8955168159",
    },
  ];
  return (
    <div>
      <div className="flex justify-around">
        <ul className="text-white flex w-full justify-around  gap-3">
          <li className="flex items-center gap-2">
            <SlSocialLinkedin />
            <a href="https://www.linkedin.com/in/mitali-khandelwal-106250251/">
              https://www.linkedin.com/in/mitali-khandelwal-106250251/
            </a>
          </li>
          <li className="flex items-center gap-2">
            <CgMail />
            <a href="mailto:mitalikh2001@gmail.com"> mitalikh2001@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <IoCallOutline />
            <a href="tel:+91 8955168159"> 8955165159</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
