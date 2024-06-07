import React, { useEffect, useRef, useState } from "react";
import deeporion from "../../images/deeporion.png";
import cybersecurity from "../../images/cybersecurity.png";
import login from "../../images/login.png";
import multicarousel from "../../images/multicarousel.png";
import autocarousel from "../../images/autocarousel.png";

const MyWork = () => {
  const triggerRef = useRef([]);
  const [isTriggered, setIsTriggered] = useState([]);

  const data = [
    {
      id: 1,
      img: deeporion,
      title: "Deeporion Technology",
      content:
        "I played a pivotal role in the design and development of a highly engaging user interface, incorporating eye-catching animations and ensuring seamless responsiveness across all screen sizes. Leveraging the power of modern technologies, I utilized React for building dynamic components, integrated Lottie animations for captivating visual effects, employed React Scroll for smooth scrolling experiences, and implemented React Router DOM for efficient navigation. This combination of advanced tools and meticulous attention to detail resulted in a visually stunning and user-friendly application.",
      path: "https://deeporion.com/",
    },
    {
      id: 2,
      img: cybersecurity,
      title: "Cyber Security",
      content:
        "Developed a responsive Cyber Security Portfolio . Experiment with unique color schemes, typography choices, and graphical elements to create a distinctive visual identity for the website or application. Leveraged React.js to build UI components and utilized React Hooks for efficient state management. Utilized the filter and map methods to filter and display menu items dynamically based on user preferences. Implement animations judiciously to engage users and create an interactive browsing experience.",
      path: "https://react-portfolio-1-gray.vercel.app/",
    },

    {
      id: 3,
      img: login,
      title: " Gradient Login Page",
      content:
        "I played a pivotal role in the design and development of a highly engaging user interface, incorporating eye-catching animations and ensuring seamless responsiveness across all screen sizes. Leveraging the power of modern technologies, I utilized React for building dynamic components, integrated Lottie animations for captivating visual effects, employed React Scroll for smooth scrolling experiences, and implemented React Router DOM for efficient navigation. This combination of advanced tools and meticulous attention to detail resulted in a visually stunning and user-friendly application.",
      path: "https://7twp9z.csb.app/",
    },
    {
      id: 4,
      img: multicarousel,
      title: "Multi Carousel",
      content:
        "I played a pivotal role in the design and development of a highly engaging user interface, incorporating eye-catching animations and ensuring seamless responsiveness across all screen sizes. Leveraging the power of modern technologies, I utilized React for building dynamic components, integrated Lottie animations for captivating visual effects, employed React Scroll for smooth scrolling experiences, and implemented React Router DOM for efficient navigation. This combination of advanced tools and meticulous attention to detail resulted in a visually stunning and user-friendly application.",
      path: "https://v4fhfv.csb.app/",
    },
    {
      id: 5,
      img: autocarousel,
      title: "Auto Carousel",
      content:
        "I played a pivotal role in the design and development of a highly engaging user interface, incorporating eye-catching animations and ensuring seamless responsiveness across all screen sizes. Leveraging the power of modern technologies, I utilized React for building dynamic components, integrated Lottie animations for captivating visual effects, employed React Scroll for smooth scrolling experiences, and implemented React Router DOM for efficient navigation. This combination of advanced tools and meticulous attention to detail resulted in a visually stunning and user-friendly application.",
      path: "https://6dmzfh.csb.app/",
    },
  ];

  const handleScroll = () => {
    data.forEach((obj, index) => {
      if (triggerRef.current && triggerRef.current[index]) {
        const elementTop =
          triggerRef.current[index].getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight) {
          setIsTriggered((prev) => ({ ...prev, [index]: true }));
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isTriggered, "isTriggered");

  return (
    <div className="mt-48 text-white">
      <h3 className="text-center font-extrabold text-5xl pb-14">Projects</h3>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex justify-around mb-11 items-center flex-wrap ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
          ref={(ele) => {
            triggerRef.current[index] = ele;
          }}
        >
          <div>
            <img
              src={item.img}
              alt={item.title}
              id={`${item.id}`}
              className={`w-[40rem]
              ${
                index === 0 
                  ? "slide-in-right"
                  : isTriggered[index] && "slide-in-left"
              }
            `}

            />
          </div>
          <div>
            <a
              href={item.path}
              className="font-bold py-4 uppercase text-pink-700"
            >
              {item.title} :-
            </a>
            <p
            className={`w-[40rem]
            ${
              index === 0 
                ? "slide-in-left"
                : isTriggered[index] && "slide-in-right"
            }
          `}

            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyWork;
