import React from 'react';
import ImageAbout from '../images/ImageAbout.png';

function About() {
  return (
    <div className='bg-[#2d123c]'>
      <div className='flex items-center justify-center h-screen py-24'>
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
      <div className="h-full w-full bg-[#3F264D] px-4 py-20 items-center" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-[#2d123c] p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#F6D969]">
              <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path
                  d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                  fill="white"></path>
              </svg>
            </div>
            <h1 className="text-[#F6D969] mb-3 text-xl font-medium lg:px-14">Full Stack Development</h1>
            <p className="px-4 text-white">Proficient in HTML, CSS, framework CSS like Tailwind CSS and Bootstrap, JavaScript, React, Node.js, and databases like MongoDB.</p>
          </div>
          <div data-aos-delay="150" className="rounded-xl bg-[#2d123c]  p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-[#F6D969]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path
                  d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.6611 9.33889 27.4286 10.2857 27.4286H13.7142C14.661 27.4286 15.4285 26.6611 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M37.7142 23.9999H22.2856C21.3388 23.9999 20.5713 24.7674 20.5713 25.7142C20.5713 26.6611 21.3388 27.4286 22.2856 27.4286H37.7142C38.661 27.4286 39.4285 26.6611 39.4285 25.7142C39.4285 24.7674 38.661 23.9999 37.7142 23.9999Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M13.7142 34.2856H10.2857C9.33889 34.2856 8.57138 35.0531 8.57138 36C8.57138 36.9468 9.33889 37.7143 10.2857 37.7143H13.7142C14.661 37.7143 15.4285 36.9468 15.4285 36C15.4285 35.0531 14.661 34.2856 13.7142 34.2856Z"
                  fill="#F5F5FC"></path>
                <path
                  d="M37.7142 34.2856H22.2856C21.3388 34.2856 20.5713 35.0531 20.5713 36C20.5713 36.9468 21.3388 37.7143 22.2856 37.7143H37.7142C38.661 37.7143 39.4285 36.9468 39.4285 36C39.4285 35.0531 38.661 34.2856 37.7142 34.2856Z"
                  fill="#F5F5FC"></path>
              </svg>
            </div>
            <h1 className="text-[#F6D969] mb-3 text-xl font-medium lg:px-14">Social Media Design</h1>
            <p className="px-4 text-white">Skilled in using Figma Canva to create compelling graphics for social media.</p>
          </div>
          <div data-aos-delay="300" className="rounded-xl bg-[#2d123c] p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#F6D969]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00004 2.85714C8.00004 1.27956 9.2796 0 10.8572 0H37.1429C38.7205 0 40.0001 1.27956 40.0001 2.85714V9.71429H48.0001V40C48.0001 43.1608 45.1609 46 42.0001 46H5.99994C2.83913 46 0 43.1608 0 40V9.71429H8.00004V2.85714ZM34.2858 4.57143H13.7144V9.71429H34.2858V4.57143ZM8.00004 40C8.00004 39.308 8.56804 38.7143 9.28579 38.7143H18.8572C19.5749 38.7143 20.1429 39.308 20.1429 40C20.1429 40.6919 19.5749 41.2857 18.8572 41.2857H9.28579C8.56804 41.2857 8.00004 40.6919 8.00004 40ZM28.5716 38.7143C27.8538 38.7143 27.2858 39.308 27.2858 40C27.2858 40.6919 27.8538 41.2857 28.5716 41.2857H38.1429C38.8606 41.2857 39.4286 40.6919 39.4286 40C39.4286 39.308 38.8606 38.7143 38.1429 38.7143H28.5716ZM18.8572 31.4286C19.5749 31.4286 20.1429 32.0223 20.1429 32.7143C20.1429 33.4063 19.5749 34 18.8572 34H9.28579C8.56804 34 8.00004 33.4063 8.00004 32.7143C8.00004 32.0223 8.56804 31.4286 9.28579 31.4286H18.8572ZM28.5716 32.7143C28.5716 32.0223 27.8538 31.4286 27.2858 31.4286H38.1429C38.8606 31.4286 39.4286 32.0223 39.4286 32.7143C39.4286 33.4063 38.8606 34 38.1429 34H28.5716C27.8538 34 27.2858 33.4063 27.2858 32.7143Z"
                  fill="white"></path>
              </svg>
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
