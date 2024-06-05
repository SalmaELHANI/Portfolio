import React from 'react';
import IconsBackend from '../images/IconsBackend.png';
import IconsFrontend from '../images/IconsFrontend.png';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-md bg-[#3F264D] p-8 text-center shadow">
      <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[#F6D969]">
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler"
          width="24"
          height="24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </div>
      <h3 className="mt-6 text-[#F6D969]">{title}</h3>
      <ul className="my-4 text-left list-disc list-inside text-white">
        {description.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

function Services() {
  const serviceDescriptions = {
    frontend: [
      "Uses HTML, CSS (Tailwind CSS, Bootstrap), and JavaScript (React, Vite).",
      "Integrates UX/UI designs for attractive and functional interfaces.",
      "Ensures cross-platform compatibility and performance optimization."
    ],
    backend: [
      "Develops servers and APIs with Node.js and Express.",
      "Manages databases using MongoDB.",
      "Ensures security, scalability, and performance of backend applications."
    ],
    socialMedia: [
      "Creates visual content for social media platforms.",
      "Adapts designs to current trends and platform-specific formats.",
      "Contributes to content strategy to maximize user engagement."
    ]
  };

  return (
    <div className='bg-[#2d123c]' style={{ fontFamily: 'Poetsen One, sans-serif' }}>
      <section id="features" className="px-6 py-14 md:py-20 md:px-10">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            My Services
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our templates allow for maximum customization. No technical skills required – our intuitive design tools let
            you get the job done easily.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3" >
          <ServiceCard
            icon={() => (
              <img src={IconsFrontend} alt="Icone de développement web" />
            )}
            title="Front-End Web Development"
            description={serviceDescriptions.frontend}
          />

          <ServiceCard
            icon={() => (
              <img src={IconsBackend} alt="Icone de développement web" />
            )}
            title="Back-End Web Development"
            description={serviceDescriptions.backend}
          />


          <ServiceCard
            icon={({ ...props }) => (
              <svg {...props}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
              </svg>
            )}
            title="Social Media Design"
            description={serviceDescriptions.socialMedia}
          />
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b "
          style={{
            backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
}

export default Services;
