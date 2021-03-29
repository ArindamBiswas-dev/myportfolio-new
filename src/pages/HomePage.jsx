import React from 'react';
import AboutMe from '../components/AboutMe';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import AllProjects from '../components/AllProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <AllProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
