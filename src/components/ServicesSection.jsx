import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";
import { SectionHeading } from "./styles/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "./styles/ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Services</h1>
          <p>Exited to work with you</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Developement</h1>
            <p>
              I develop full-blown web apps using HTML, CSS and JavaScript (MERN
              Stack)
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <h1>Design to HTML</h1>
            <p>
              I convert existing designs into pixel-perfect HTML/CSS websites.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaBrain />
            </IconWrapper>
            <h1>Mentorship</h1>
            <p>
              You can book a session with me for mentorship or one-on-one
              coding. $30/hr!
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
