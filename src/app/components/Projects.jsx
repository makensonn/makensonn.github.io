import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Tic from "./Tic";
import Footer from "./Footer";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneImg from "../assets/projects/asl.gif";
import projectTwoImg from "../assets/projects/thousand.gif";
import projectThreeeImg from "../assets/projects/mozy.svg";
import projectFourImg from "../assets/projects/mbj.svg";
import projectSixImg from "../assets/projects/insight.svg";
import projectFiveImg from "../assets/projects/lulawn.svg";
import projectThreeImg from "../assets/projects/robot.png";


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
            title="Project"
            backgroundImg={projectOneImg}
            projectUrl="/asl"
            tech=""
          />

          {/* Description *
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is a Open Source American Sign Language hand tracker using Python, OpenCV, TensorFlow.
          </p>

          {/* Project 2*/}
          <ProjectItems
            title="Project"
            backgroundImg={projectTwoImg}
            projectUrl="https://thousandmen.co/"
            tech=""
          />

          {/* Description *
          <p>
            Title: Thousandmen.co
            <br></br>
            <br></br>
            This is a custom designed ecommerce webapp for Thousandmen using Shopify & JavaScript.
          </p>

          {/* Project 3*/}
          <ProjectItems
            title="Project"
            backgroundImg={projectThreeeImg}
            projectUrl="https://amoseb.com/"
            tech=""
          />


          {/* Description *
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

          {/* Project 4*/}

          <ProjectItems
            title="Project"
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

          <ProjectItems
            title="Project"
            backgroundImg={projectFiveImg}
            projectUrl="https://lulawn.vercel.app/"
            tech=""
          />

          {/* Description *
          <p>
            Title: Lucien Lawn Services
            <br></br>
            <br></br>
            This is a custom landing page using Next.js.
          </p>

          {/* Project 6*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectSixImg}
            projectUrl="https://insitee.github.io/"
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
