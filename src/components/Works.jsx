import React, { useState, useEffect } from 'react';
import CleanSpaceDesign from '../images/socialmedia-cleanspace.png';
import ElhanishopDesign from '../images/socialmedia-elhanishop.png';
import CleanSpaceWeb from '../images/webCleanSpace.png';
import NoteManagementWeb from '../images/webNoteManagement.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Works() {
  const [selectedTab, setSelectedTab] = useState('development');
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  const projects = {
    development: [
      {
        title: 'CleanSpace',
        description: 'CleanSpace is an online platform offering home cleaning services with high-quality service at the click of a button. It leverages the MERN Stack.',
        imgSrc: CleanSpaceWeb,
        link: 'https://github.com/SalmaELHANI/CleanSpace.git',
      },
      {
        title: 'Note Management',
        description: 'Note Management is an efficient online platform designed to help users organize and manage their notes seamlessly. Built with the MERN Stack, it ensures reliable performance and a user-friendly interface.',
        imgSrc: NoteManagementWeb,
        link: 'https://github.com/SalmaELHANI/Note_Management.git',
      },
    ],
    design: [
      {
        title: 'CleanSpace Social Media Design',
        description: 'A captivating Instagram and Facebook page design for CleanSpace, created using Figma and Canva. This design aims to engage and attract followers with its clean and modern aesthetic.',
        imgSrc: CleanSpaceDesign,
        link: 'https://www.figma.com/design/JjMP7sMWMftCe0v0ieSskA/CleanSpace?node-id=0-1&t=ZntFVMFr2E9Q4f8E-1',
      },
      {
        title: 'ELhani.shop Social Media Design',
        description: 'A visually stunning Instagram and Facebook page design for ELhani.shop, crafted using Figma and Canva. This design focuses on showcasing the brand’s unique offerings and creating a strong visual identity.',
        imgSrc: ElhanishopDesign,
        link: 'https://www.figma.com/design/EqJRcwGuvNZtwRIy78W6XP/Untitled?node-id=0-1&t=INx69EBB5mVfOj9m-1',
      },
    ],
  };

  const allProjects = [...projects.development, ...projects.design];

  const visibleProjects = (selectedTab === 'all' ? allProjects : projects[selectedTab]).slice(startIndex, startIndex + 3);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    const maxIndex = (selectedTab === 'all' ? allProjects : projects[selectedTab]).length - 3;
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const showArrows = (selectedTab === 'all' ? allProjects : projects[selectedTab]).length > 3;

  return (
    <div className='bg-[#2d123c] pt-8'>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-[#F6D969] flex items-center uppercase">
            <p
              onClick={() => { setSelectedTab('development'); setStartIndex(0); }}
              className={`font-semibold inline-block mx-6 pb-2 cursor-pointer ${selectedTab === 'development' ? 'border-b-2 border-[#F6D969]' : ''}`}
            >
              Web Development Blog
            </p>
            <p
              onClick={() => { setSelectedTab('design'); setStartIndex(0); }}
              className={`font-semibold inline-block mx-6 pb-2 cursor-pointer ${selectedTab === 'design' ? 'border-b-2 border-[#F6D969]' : ''}`}
            >
              Social Media Design Blog
            </p>
          </div>
          <p
            onClick={() => { setSelectedTab('all'); setStartIndex(0); }}
            className={`text-[#F6D969] font-semibold inline-block pb-2 cursor-pointer ${selectedTab === 'all' ? 'border-b-2 border-[#F6D969]' : ''}`}
          >
            See All
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {visibleProjects.map((project, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col bg-white" data-aos="zoom-in">
                <div className="relative">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img className="w-full" src={project.imgSrc} alt={project.title} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0"></div>
                  </a>
                  <div className="text-xs absolute top-0 right-0 bg-[#2d123c] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-[#2d123c] transition duration-500 ease-in-out">
                    {project.title.includes('Social Media') ? 'design' : 'web'}
                  </div>
                </div>
                <div className="px-6 py-4 mb-auto bg-white">
                  <p className="font-medium text-lg transition duration-500 ease-in-out inline-block mb-2">
                    {project.title}
                  </p>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 text-xs font-regular text-gray-900 hover:text-[#694080f9] mr-1 flex flex-row items-center"
                  >
                    {project.title.includes('Social Media') ? 'Go to Design' : 'Go to GitHub'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {showArrows && (
            <>
              <button 
                onClick={handlePrevClick}
                className="lg:absolute lg:top-1/2 lg:left-[-40px] lg:transform lg:-translate-y-1/2 bg-[#F6D969] p-2 rounded-full text-[#2d123c] hover:bg-[#e5c158] hidden lg:block"
                disabled={startIndex === 0}
              >
                &lt;
              </button>
              <button 
                onClick={handleNextClick}
                className="lg:absolute lg:top-1/2 lg:right-[-40px] lg:transform lg:-translate-y-1/2 bg-[#F6D969] p-2 rounded-full text-[#2d123c] hover:bg-[#e5c158] hidden lg:block"
                disabled={startIndex + 3 >= (selectedTab === 'all' ? allProjects : projects[selectedTab]).length}
              >
                &gt;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;
