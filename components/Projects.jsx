import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import webImg from '../public/assets/projects/web.png';
import cppImg from '../public/assets/projects/cpp.png';
import pythonImg from '../public/assets/projects/python.png';
import javaImg from '../public/assets/projects/java.png';
import mobileImg from '../public/assets/projects/mobile.png';
import academicImg from '../public/assets/projects/academic.png';

import ProjectItem from './ProjectItem';
import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Projects</p>
        <p className='py-6'>// View projects</p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Web Development'
            backgroundImg={webImg}
            projectUrl='/web'
            tech='Websites including To-do-list, cof, cogopt.org, and more.'
          />
          <ProjectItem
            title='C++ Development'
            backgroundImg={cppImg}
            projectUrl='/cpp'
            tech='C++ procjects including Arduino Smart Home, ageCalc, RPS, and more.'
          />
          <ProjectItem
            title='Python Development'
            backgroundImg={pythonImg}
            projectUrl='/python'
            tech='Python projects including Budget tool, 456, Haitian Flag, and more.'
          />
          <ProjectItem
            title='Java Development'
            backgroundImg={javaImg}
            projectUrl='/java'
            tech='Java projects including Hotel Occupancy, Miles per gallon, Multiplication Table, and more.'
          />
          <ProjectItem
            title='Mobile Development'
            backgroundImg={mobileImg}
            projectUrl='/mobile'
            tech='Mobile Apps including React Fappy Bird, and more.'
          />
          <ProjectItems
            title='Academic Development'
            backgroundImg={academicImg}
            projectUrl='https://www.youtube.com/channel/UCqXnQJAjBqTwqAE2MRky3Fw'
            tech='Undergraduate projects'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
