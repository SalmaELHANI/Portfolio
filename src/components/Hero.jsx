import React from 'react';
import { Link } from 'react-router-dom';
import ImageHero from '../images/ImageHero.png';

const socialLinks = [
  {
    label: "Whatsapp",
    className: "mr-1",
    svgWidth: 45,
    svgHeight: 45,
    url: "https://wa.me/0623558553",
    svgLink: (
      <g>
        <path
          fill="#f6d969"
          d="M15,3c-6.627,0 -12,5.373 -12,12c0,2.25121 0.63234,4.35007 1.71094,6.15039l-1.60352,5.84961l5.97461,-1.56836c1.74732,0.99342 3.76446,1.56836 5.91797,1.56836c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.89258,9.40234c0.195,0 0.39536,-0.00119 0.56836,0.00781c0.214,0.005 0.44692,0.02067 0.66992,0.51367c0.265,0.586 0.84202,2.05608 0.91602,2.20508c0.074,0.149 0.12644,0.32453 0.02344,0.51953c-0.098,0.2 -0.14897,0.32105 -0.29297,0.49805c-0.149,0.172 -0.31227,0.38563 -0.44727,0.51563c-0.149,0.149 -0.30286,0.31238 -0.13086,0.60938c0.172,0.297 0.76934,1.27064 1.65234,2.05664c1.135,1.014 2.09263,1.32561 2.39063,1.47461c0.298,0.149 0.47058,0.12578 0.64258,-0.07422c0.177,-0.195 0.74336,-0.86411 0.94336,-1.16211c0.195,-0.298 0.39406,-0.24644 0.66406,-0.14844c0.274,0.098 1.7352,0.8178 2.0332,0.9668c0.298,0.149 0.49336,0.22275 0.56836,0.34375c0.077,0.125 0.07708,0.72006 -0.16992,1.41406c-0.247,0.693 -1.45991,1.36316 -2.00391,1.41016c-0.549,0.051 -1.06136,0.24677 -3.56836,-0.74023c-3.024,-1.191 -4.93108,-4.28828 -5.08008,-4.48828c-0.149,-0.195 -1.21094,-1.61031 -1.21094,-3.07031c0,-1.465 0.76811,-2.18247 1.03711,-2.48047c0.274,-0.298 0.59492,-0.37109 0.79492,-0.37109z"
        />
      </g>
    ),
  },
  {
    label: "Instagram",
    className: "mr-1",
    svgWidth: 45,
    svgHeight: 45,
    url: "https://www.instagram.com/salmaelhanii?igsh=dzZoNTl3aDBrb3I2",
    svgLink: (
      <g>
        <path
          fill="#f6d969"
          d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"
        />
      </g>
    ),
  },
  {
    label: "Facebook",
    className: "mr-1",
    svgWidth: 25,
    svgHeight: 25,
    url: "https://www.facebook.com/salma.hani.9480",
    svgLink: (
      <g>
        <path
          fill="#f6d969"
          d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"
        />
      </g>
    ),
  },
  {
    label: "Linkedin",
    className: "ml-4",
    svgWidth: 45,
    svgHeight: 45,
    url: "https://www.linkedin.com/in/salma-el-hani/",
    svgLink: (
      <g>
        <path
          fill="#f6d969"
          d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"
        />
      </g>
    ),
  },
];
function Hero() {
  return (
    <section className=" body-font bg-gradient-to-r from-[#3F264D] to-[#68417c] mt-24 md:mt-0">
      <div className="container mx-auto flex lg:px-24 md:py-10 lg:flex-row flex-col items-center" style={{ fontFamily: 'Poetsen One, sans-serif' }}>
        <div className="lg:flex-grow mt-5 lg:mt-0 lg:w-2/3  lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center  pt-16">
          <h1 className="lg:text-5xl mb-7 text-[#F6D969] tracking-tight text-4xl">
            Hi! I'm Salma EL HANI <br/>
            <span className='text-2xl'> Full Stack Developer & Social Media Designer</span>
          </h1>
          <p className="mb-8 lg:pl-0 pl-2 pr-2 lg:mr-44 leading-relaxed text-white">
            Passionate about creating engaging web experiences. Experienced in both frontend and backend development, with a keen eye for social media design trends.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex bg-[#F6D969] py-2 px-9 focus:outline-none border-2 border-[#F6D969] hover:text-[#F6D969] hover:bg-[#3F264D] hover:border-2 hover:border-[#F6D969] rounded text-lg">
              Contact me
            </Link>
            <a href="#" className="ml-4 inline-flex bg-gray-100 border-0 py-2 px-9 focus:outline-none hover:bg-gray-200  rounded text-lg">
              Download cv
            </a>
          </div>
          <div className="flex mt-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className={link.className} aria-label={link.label}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={link.svgWidth} height={link.svgHeight} viewBox="0 0 48 48">
                  {link.svgLink}
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:max-w-lg lg:mt-16 mb-5 lg:w-1/3 lg:mb-16">
          <img className="object-cover object-center rounded" alt="hero" src={ImageHero} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
