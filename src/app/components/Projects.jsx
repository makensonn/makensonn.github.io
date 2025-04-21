import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Tic from "./Tic";
import Footer from "./Footer";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneImg from "../assets/projects/asl.png";
import projectTwoImg from "../assets/projects/thousand.png";
import projectThreeeImg from "../assets/projects/mozy.png";
import projectFourImg from "../assets/projects/mbj.png";
import projectFiveImg from "../assets/projects/lulawn.png";
import projectSixImg from "../assets/projects/insight.png";

import projectSevenImg from "../assets/projects/art.png";
import projectEightImg from "../assets/projects/cof.png";
import projectNineImg from "../assets/projects/dontforget.png";
import projectTenImg from "../assets/projects/guitto.png";
import projectElevenImg from "../assets/projects/sc.png";
import projectTwelveImg from "../assets/projects/gym.png";


// Source URLs
import ProjectItems from "./ProjectItems";
//import ProjectItem from "./ProjectItem";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-3 gap-8";
const buttonContainerStyle = "flex justify-center py-12";
const socialIconStyle = "rounded-full shadow-lg shadow-neutral-950 p-6 cursor-pointer hover:scale-110 ease-in duration-300";

const Projects = () => {
  return (
    <>
    <Navbar/>
    <div id="projects" className={containerStyle}>
      <div className={maxWidthStyle}>
        <p className={titleStyle}>
          <br></br>
          <br></br>
          Projects
        </p>
        <p className="py-6"></p>


        <div className={gridStyle}>
          {/* Project 1*/}
          <ProjectItems
            title="Project: American Sign Langauge Hand Tracker"
            backgroundImg={projectOneImg}
            projectUrl="/asl"
            tech=""
          />

          {/* Description 
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is a Open Source American Sign Language hand tracker using Python, OpenCV, TensorFlow.
          </p>

          {/* Project 2*/}
          <ProjectItems
            title="Project: Custom Shopify Template"
            backgroundImg={projectTwoImg}
            projectUrl="https://thousandmen.co/"
            tech=""
          />

          <ProjectItems
            title="Project: Speed Converter"
            backgroundImg={projectElevenImg}
            projectUrl="https://makensonn.github.io/sc"
            tech=""
          />

          <ProjectItems
            title="Project: To-Do List"
            backgroundImg={projectNineImg}
            projectUrl="https://makensonn.github.io/todolist"
            tech=""
          />


          {/* Description *
          <p>
            Title: Thousandmen.co
            <br></br>
            <br></br>
            This is a custom designed ecommerce webapp for Thousandmen using Shopify & JavaScript.
          </p>

          {/* Project 3*
          <ProjectItems
            title="Project: Custom Shopify Template"
            backgroundImg={projectThreeeImg}
            projectUrl="https://amoseb.com/"
            tech=""
          />


          /* Description *
          <p>
            Title: Robot App
            <br></br>
            <br></br>
            Automated Florida Power and Lights robot by building a mobile app with a team of five using Java. 
          </p>

     
          {/*Description *
          <p>
            Title: Amoseb.com
            <br></br>
            <br></br>
            This is a custom designed drop shipping webapp for AmoseB using Shopify & JavaScript.
          </p>

          {/* Project 4*

          <ProjectItems
            title="Project: Custom Shopify Template"
            backgroundImg={projectFourImg}
            projectUrl="https://mbjllc.store/"
            tech=""
          />

          {/* Description *
          <p>
            Title: Mbjllc.store
            <br></br>
            <br></br>
            This is a custom designed drop shipping web app for MBJ using Shopify & JavaScript.
          </p>

          {/* Project 5*/}


          {/* Description *
          <p>
            Title: Lucien Lawn Services
            <br></br>
            <br></br>
            This is a custom landing page using Next.js.
          </p>

          {/* Project 6*/}

          <ProjectItems
            title="Project: Hackathon Accessibility Website"
            backgroundImg={projectSixImg}
            projectUrl="https://insitee.github.io/"
            tech=""
          />
          
          <ProjectItems
            title="Project: Informative Coding Website"
            backgroundImg={projectEightImg}
            projectUrl="https://makensonn.github.io/cof"
            tech=""
          /> 
          
          <ProjectItems
              title="Project: Custom Business Landing Page"
              backgroundImg={projectFiveImg}
              projectUrl="https://lulawn.vercel.app/"
              tech=""
            />

          <ProjectItems
            title="Project: Art Gallery Website"
            backgroundImg={projectSevenImg}
            projectUrl="https://makensonn.github.io/art/"
            tech=""
          />


          
          <ProjectItems
            title="Project: Custom Business Landing Page"
            backgroundImg={projectTenImg}
            projectUrl="https://guitto-eta.vercel.app/"
            tech=""
          />

          
          
          {/*<ProjectItems
            title="Project: Informative Workout Website"
            backgroundImg={projectTwelveImg}
            projectUrl="https://makensonn.github.io/gym"
            tech=""
          />

          {/* Description *
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning wesbite for PlutoHacks 2022 using JavaScript, HTML, and
            Bootstrap.
          </p> */
}
        </div>

        <br></br>
        <br></br>
        <br></br>
        <Tic />

        <div className={buttonContainerStyle}>
          <Link legacyBehavior href="/more">
            <a>
              <div className={socialIconStyle}>View More</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
