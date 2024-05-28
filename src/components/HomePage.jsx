import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Works from './Works'
import Contact from './Contact'

function HomePage() {
    return (
        <>
            <Hero />
                <About />
                <Services />
                <Works />
                <Contact />
        </>
    );
}

export default HomePage;