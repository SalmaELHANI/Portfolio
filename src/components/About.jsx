import React from 'react';
import ImageAbout from '../images/ImageAbout.png';
import IconsProblem from '../images/IconsProblem.png';
import IconsWeb from '../images/IconsWeb.png';
import IconsDesign from '../images/IconsDesign.png';


function About() {
  return (
    <div className='bg-[#2d123c]'>
      <div className='flex items-center justify-center h-screen py-24' data-aos="fade-right">
        <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">

          <div className="flex lg:justify-end justify-center lg:w-1/5 lg:mt-0 mt-8">
            <img className="object-cover h-96" src={ImageAbout} alt="Winding mountain road" />
          </div>

          <div className="p-6 lg:p-12 lg:w-4/5 bg-[#3F264D] mx-8 mb-12 lg:m-0 rounded-xl" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
            <h2 className="text-2xl font-medium text-[#F6D969] lg:text-4xl">About me</h2>
            <p className="mt-4 text-sm md:text-lg text-white">
              I'm a Full Stack Developer and Social Media Designer with a passion for creating engaging digital experiences.
              I specialize in building responsive web applications and crafting visually appealing social media content.
              Let's collaborate to bring your ideas to life!
            </p>
          </div>

        </div>
      </div>
      <div className="h-full w-full bg-[#3F264D] px-4 py-20 items-center" style={{ fontFamily: 'Poetsen One, sans-serif' }} >
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-[#2d123c] p-6 text-center shadow-xl" data-aos="zoom-in">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#F6D969]">
            <img src={IconsWeb} alt="IconsWeb" className='h-10 w-10'/>
            </div>
            <h1 className="text-[#F6D969] mb-3 text-xl font-medium lg:px-14">Full Stack Development</h1>
            <p className="px-4 text-white">Proficient in HTML, CSS, framework CSS like Tailwind CSS and Bootstrap, JavaScript, React, Node.js, and databases like MongoDB.</p>
          </div>
          <div data-aos-delay="150" className="rounded-xl bg-[#2d123c]  p-6 text-center shadow-xl" data-aos="zoom-in">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#F6D969]">
            <img src={IconsDesign} alt="IconsDesign" className='h-10 w-10'/>
            </div>
            <h1 className="text-[#F6D969] mb-3 text-xl font-medium lg:px-14">Social Media Design</h1>
            <p className="px-4 text-white">Skilled in using Figma Canva to create compelling graphics for social media.</p>
          </div>
          <div data-aos-delay="300" className="rounded-xl bg-[#2d123c] p-6 text-center shadow-xl" data-aos="zoom-in">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#F6D969]">
              <img src={IconsProblem} alt="IconsProblem" className=' h-10 w-10'/>
            </div>
            <h1 className="text-[#F6D969] mb-3 text-xl font-medium lg:px-14">Problem Solving</h1>
            <p className="px-4 text-white">Strong analytical skills with a passion for debugging code and finding innovative solutions to complex challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
