"use client";
import Image from "next/image";
import React from "react";
import aslImg from "../assets/projects/asl.png"; //ASL Hand Tracker
import YouTubePlayer from "../components/YouTubePlayer";
import { RiRadioButtonFill } from "react-icons/ri";

const videoId = "q1tI7GO7d1A"; //ASL Video

const asl = () => {
  return (
    <div className="w-full h-screen">
      {/* Project Overview */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Hand Gesture Tracker</h2>
          <br></br>
          <YouTubePlayer videoId={videoId} />
          <br></br>
          <br></br>
          <h2>Overview</h2>
          <p>
            I built this application in Python and it&apos;s source code is on
            GitHub. The Hand Tracker project is a Python-based solution that
            utilizes TensorFlow, OpenCV, Mediapipe, Matplotlib, and Scikit-Learn
            to recognize and interpret hand gestures in real-time. By leveraging
            deep learning with TensorFlow, the system accurately detects and
            classifies hand movements. OpenCV and Mediapipe provide the
            necessary tools for hand tracking and pose estimation. The project
            incorporates a graphical interface in Jupyter Notebook, enabling
            interactive visualization of the recognized gestures using
            Matplotlib. Hand Tracker serves as an invaluable tool for learning
            and communicating in American Sign Language, while also contributing
            to the fields of computer vision, gesture recognition, and
            human-computer interaction.
          </p>
          <a
            href="https://github.com/makensonn/asl"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="/" target="" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Home</button>
          </a>
        </div>

        {/*Technologies*/}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-neutral-950 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Jupyter Notebook
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TensorFlow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OpenCV
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Matplotlib
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mediapipe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit-Learn
              </p>
            </div>
          </div>
        </div>
        {/* Technologies */}
      </div>
      {/*Project Overview*/}

      {/* Back Button
      <div className="flex justify-center py-12">
        <Link legacyBehavior href="/#projects">
          <a>
            <div className="rounded-full shadow-lg shadow-neutral-950 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleLeft className="" size={30} />
            </div>
          </a>
        </Link>
      </div>
      /* Back Button */}
    </div>
  );
};

export default asl;
