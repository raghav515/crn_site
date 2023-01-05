import React, { useState } from "react";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data";
import Services from "../Services";
import Footer from "../Footer";
import img1 from "../../images/sec-1.png";
import { Button } from "../ButtonElements";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    Img,
    ImgWrap,
} from "./PageStyle.js";

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
            <InfoContainer lightBg={false} id={"abu"}>
                <InfoWrapper>
                    <InfoRow imgStart={""}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{"ABU ROBOCON"}</TopLine>
                                <Heading lightText={true}>
                                    {
                                        "An Ultimate Robotics Contest for Undergrads"
                                    }
                                </Heading>
                                <Subtitle darkText={false}>
                                    {
                                        "We build Robots that aim at incredible Precision, Reliability and Speed or in other words Industrial performance."
                                    }
                                </Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={1}
                                        dark={1}
                                    >
                                        {"ABU Robocon Official Website"}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img1} alt={"alt"} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            {/* <InfoSection {...homeObjOne} /> */}
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
