import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

// Tailwind CSS Classes
const containerStyle = "w-full h-screen text-center";
const maxWidthStyle =
  "max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center";
const imageStyle = "rounded-full";
const nameStyle = "uppercase text-sm tracking-widest text-gray-600";
const headingStyle = "py-4 text-white-700";
const descriptionStyle = "py-4 text-white-600 sm:max-w-[70%] m-auto";
const socialIconsContainerStyle =
  "flex items-center justify-between max-w-[330px] m-auto py-4";
const socialIconStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-6 cursor-pointer hover:scale-110 ease-in duration-300";
const buttonContainerStyle = "flex justify-center py-12";
const titleStyle = "text-4xl font-bold";

const Main = () => {
  return (
    <div id="home" className={containerStyle}>
      <div className={maxWidthStyle}>
        <div>
          <p className={titleStyle}></p>
          <h1 className={headingStyle}>
            <span>Makenson Noel</span>
          </h1>
          <p className={descriptionStyle}>Software Engineer</p>
          <div className={socialIconsContainerStyle}>
            <a
              href="https://www.linkedin.com/in/makensonnoel/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={socialIconStyle}>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/makensonn"
              target="_blank"
              rel="noreferrer"
            >
              <div className={socialIconStyle}>
                <FaGithub />
              </div>
            </a>
            <a href="/#about">
              <div className={socialIconStyle}>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
          <div className={buttonContainerStyle}>
            <Link legacyBehavior href="/#projects">
              <a>
                <div className={socialIconStyle}>View Projects</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
