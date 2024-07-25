import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import HoverBox from "../HoverBox";
  

const TechnicalSkills = () => {

  const [activeIndex, setActiveIndex] = useState(0);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };





  const skills = [
    {
      title: "Control System",
      data: [
        { id: 1, title: "Git" },
        { id: 2, title: "Github" },
      ],
    },
    {
      title: "Platform",
      data: [
        { id: 1, title: "Linux (Ubantu)" },
        { id: 2, title: "Windows" },
        { id: 3, title: "MacOs" },
      ],
    },
    {
      title: "Editor",
      data: [
        { id: 1, title: "Visual Studio Code" },
        { id: 2, title: "Replit" },
      ],
    },
    {
      title: "Package Manager",
      data: [
        { id: 1, title: "Npm" },
        { id: 2, title: "yarn" },
        { id: 3, title: "Nvm" },
      ],
    },
    {
      title: "CSS Framework",
      data: [
        { id: 1, title: "Bootstrap" },
        { id: 2, title: "Material UI" },
        { id: 3, title: "tailwind Css" },
        { id: 4, title: "SASS" },
        { id: 5, title: "Jquery" },
      ],
    },
    {
      title: "Frontend",
      data: [
        { id: 1, title: "Html" },
        { id: 2, title: "Css" },
        { id: 3, title: "JavaScript" },
      ],
    },
    {
      title: "Framework",
      data: [{ id: 1, title: "React Js" }],
    },
    {
      title: "Api Testing",
      data: [{ id: 1, title: "Postman" }],
    },
    {
      title: "CMS",
      data: [{ id: 1, title: "WordPress" }],
    },
  ];

  return (
    <div className="flex justify-center items-center p-8 flex-col">
  
       
        <div className="inner">
          <h3 className="text-white text-3xl font-semibold py-3">Technical Skills</h3>
     
      </div>

      <div
        style={{
          width: "90%",
        }}
      >
        <Slider {...settings}>
        {skills.map((item, index) => (
  <div className="container" key={index}>
    <p className="flex justify-center items-center h-56">{item.title}</p>
    <div className="overlay">
      {item.data.map((data) => (
        <h4 style={{color: "white"}} key={data.id}>{data.title}</h4>
      ))}
    </div>
  </div>
))}
        </Slider>
       

      </div>



      
    </div>
  );
};

export default TechnicalSkills;
