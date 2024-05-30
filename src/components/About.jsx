import React from 'react';
import ImageAbout from '../images/ImageAbout.png';

function About() {
  return (
    <div className='bg-[#2d123c] h-screen flex items-center justify-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-3/4">

        <div className="flex lg:justify-end justify-center lg:w-1/5 lg:mt-0 mt-8" >
          <img className="object-cover h-96" src={ImageAbout} alt="Winding mountain road" />
        </div>

        <div className="p-6 lg:p-12 lg:w-4/5 bg-[#3F264D] mx-8 mb-12 lg:m-0 rounded-lg" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
          <h2 className="text-2xl font-medium text-[#F6D969] lg:text-4xl">About me</h2>
          <p className="mt-4 text-sm md:text-lg text-white">
            I'm a Full Stack Developer and Social Media Designer with a passion for creating engaging digital experiences.
            I specialize in building responsive web applications and crafting visually appealing social media content.
            Let's collaborate to bring your ideas to life!
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
