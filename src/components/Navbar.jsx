import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Logo1.png'; 

function Navbar() {
    const location = useLocation();
    const hideNavbar = location.pathname.includes('/dashboard');
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        { id: 1, label: "About", target: "/about" },
        { id: 2, label: "Services", target: "/service" },
        { id: 3, label: "Work", target: "/work" },
        { id: 4, label: "Contact", target: "/contact" },
    ];
    const handleHomeClick = () => {
        setMenuOpen(false);
    };
    const MenuIconOpen = () => (
        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    );
    const MenuIconClose = () => (
        <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
            <g style={{ stroke: "none", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "none", fillRule: "nonzero", opacity: "1" }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M6 90c-1.536 0-3.071-0.586-4.243-1.758c-2.343-2.343-2.343-6.142 0-8.484l78-78c2.342-2.343 6.143-2.343 8.484 0c2.344 2.343 2.344 6.142 0 8.485l-78 78C9.071 89.414 7.536 90 6 90z" style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                <path d="M84 90c-1.535 0-3.071-0.586-4.242-1.758l-78-78c-2.343-2.343-2.343-6.142 0-8.485c2.343-2.343 6.143-2.343 8.485 0l78 78c2.344 2.343 2.344 6.142 0 8.484C87.071 89.414 85.535 90 84 90z" style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
            </g>
        </svg>
    );

    return (
        <header className={`${hideNavbar ? 'hidden' : 'flex'} h-24 sm:h-16 lg:rounded-3xl lg:ml-8 lg:my-4 bg-[#3F264D] fixed top-0 left-0 w-full lg:w-auto z-50`} style={{ fontFamily: 'Poetsen One, sans-serif' }}>
            <div className="container mx-auto pl-8 flex items-center justify-between relative z-10">
                <Link to="/" className=" flex flex-col items-center">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </Link>
                <div className="flex items-center">
                    <nav className="text-white tracking-widest text-sm lg:flex items-center hidden uppercase ">
                        <a href="/" className="py-2 lg:ml-96 mr-8 border-b-2 border-[#F6D969] hover:text-[#F6D969] ">
                            Accueil
                        </a>
                        {links.map(({ id, label, target }) => (
                            <Link
                                key={id}
                                to={target}
                                className="py-2 mx-8 hover:border-b-2 border-[#F6D969] text-white duration-100"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-4 w-10 h-10 flex flex-col mr-8 items-center p-2 justify-center text-sm text-white rounded-lg lg:hidden bg-[#3F264D] focus:outline-none ring-2 ring-gray-200 hover:bg-[#522E6A]"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuOpen ? <MenuIconClose /> : <MenuIconOpen />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full lg:hidden bg-[#2d123c]" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#3F264D]">
                            <li>
                                <Link to="/" onClick={handleHomeClick} className="font-bold block py-2 px-3 text-yellow-400 rounded hover:text-yellow-300">Accueil</Link>
                            </li>
                            {links.map(({ label, target }, index) => (
                                <li key={index}>
                                    {target === "/" ?
                                        <Link to={target} onClick={handleHomeClick} className="block py-2 px-3 rounded text-white">{label}</Link>
                                        :
                                        <Link to={target} onClick={handleHomeClick} className="block py-2 px-3 rounded text-white">{label}</Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
