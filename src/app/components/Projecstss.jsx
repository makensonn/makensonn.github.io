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
import projectThreeImg from "../assets/projects/mozy.gif";
import projectFourImg from "../assets/projects/mbj.gif";
import projectSixImg from "../assets/projects/insight.gif";
import projectFiveImg from "../assets/projects/lulawn.png";


// Source URLs
import ProjectItems from "./ProjectItems";
//import ProjectItem from "./ProjectItem";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";
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
