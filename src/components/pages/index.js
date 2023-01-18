import React, { useState } from "react";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data";
import Services from "../Services";
import Footer from "../Footer";
import GallerySection from '../index/gallery/gallery'
import AboutSection from "../index/about/about";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
