import React from "react";

const TechnicalSkills = () => {
  // control system data
  const controlData = [
    {
      id: 1,
      title: "Git",
    },

    {
      id: 2,
      title: "Github",
    },
  ];

  // platform data

  const platformData = [
    {
      id: 1,
      title: "Linux (Ubantu)",
    },

    {
      id: 2,
      title: "Windows",
    },

    {
      id: 3,
      title: "MacOs",
    },
  ];

  // Editor data

  const editorData = [
    {
      id: 1,
      title: "Visual Studio Code ",
    },

    {
      id: 2,
      title: "Replit",
    },
  ];

  // package Manager

  const packageData = [
    {
      id: 1,
      title: "Npm ",
    },

    {
      id: 2,
      title: "yarn",
    },

    {
      id: 3,
      title: "Nvm",
    },
  ];

  //   Css FrameWorks

  const frameworksData = [
    {
      id: 1,
      title: "Bootstrap ",
    },

    {
      id: 2,
      title: "Material UI",
    },

    {
      id: 3,
      title: "tailwind Css",
    },

    {
      id: 4,
      title: "SASS",
    },

    {
      id: 5,
      title: "Jquery",
    },
  ];

  // Frontend

  const frontendData = [
    {
      id: 1,
      title: "Html ",
    },

    {
      id: 2,
      title: "Css ",
    },

    {
      id: 3,
      title: "JavaScript",
    },
  ];

  //   framework

  const frameworkData = [
    {
      id: 1,
      title: "React Js ",
    },
  ];

  //   Api testing

  const testingData = [
    {
      id: 1,
      title: " Postman ",
    },
  ];

  //   Cms

  const cmsData = [
    {
      id: 1,
      title: "WordPress",
    },
  ];

  return (
    <div className="flex justify-center items-center p-8">
      <div className="card example-5">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect
          rx="8"
          ry="8"
          class="line"
          height="100%"
          width="100%"
          stroke-linejoin="round"
        />
      </svg>
      <div className="inner">
        <h3 >Technical Skills</h3>
      </div>
    </div>

      <div className="flex justify-around w-[50vw] h-[63vh] overflow-x-scroll flex-wrap gap-5 scroller ">
        {/********** control stystem starts here **********/}

        <div className="w-56 text-center h-40 md:h-64 flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Control System</h3>

          {controlData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>

        {/********** control stystem ends here **********/}

        {/********** Platform starts here **********/}

        <div className="w-56 text-center h-40 md:h-64 flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Platform</h3>
          {platformData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>

        {/********** Platform  starts here **********/}

        {/********** Editor   starts here **********/}

        <div className="w-56 text-center  h-40 md:h-64  flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Editor</h3>
          {editorData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>

        {/********** Editor  ends here **********/}

        {/********** Package Manger starts here **********/}
        <div className="w-56 text-center  h-40 md:h-64  flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Package Manager</h3>
          {packageData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {/********** Package Manger ends here **********/}

        {/********** Css framework starts here **********/}

        <div className="w-56 text-center  h-40 md:h-64   flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">CSS Framework</h3>
          {frameworksData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>

        {/********** Css framework ends here **********/}

        {/********** Frontend start here **********/}

        <div className="w-56 text-center   h-40 md:h-64  flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Frontend</h3>
          {frontendData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {/**********  Frontend ends here **********/}

        {/**********  Frameework here **********/}
        <div className="w-56 text-center h-40 md:h-64  flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">FrameWork</h3>
          {frameworkData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {/**********  Frameework ends here **********/}

        {/**********  Api testing starts here **********/}

        <div className="w-56 text-center h-40 md:h-64  flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">Api Testing</h3>
          {testingData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {/**********  Api testing ends here **********/}

  {/**********  Cms  starts here **********/}

  <div className="w-56 text-center  h-40 md:h-64 flex flex-col justify-center gap-2">
          <h3 className="text-pink-700 text-3xl">CMS</h3>
          {cmsData.map((item) => (
            <div key={item.id}>
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {/**********  Cms  ends here **********/}




      </div>
    </div>
  );
};

export default TechnicalSkills;
