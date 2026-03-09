import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Home component loaded, hash:", location.hash);
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Expertise />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
