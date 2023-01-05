import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesH2,
    ServicesP,
} from "./ServicesElements";

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Team</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>name</ServicesH2>
                        <ServicesP>designation</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>name</ServicesH2>
                        <ServicesP>designation</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>name</ServicesH2>
                        <ServicesP>designation</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;
