import { FaPalette, FaUsers, FaMobileAlt } from "react-icons/fa";
import { SectionHeading } from "./styles/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection
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
              <FaPalette />
            </IconWrapper>
            <h1>UI/UX Design</h1>
            <p>
              I create intuitive and visually appealing user interfaces that
              prioritize user experience, accessibility, and design systems.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <h1>User Research</h1>
            <p>
              I conduct user research, create user personas, and analyze user
              behavior to inform data-driven design decisions.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaMobileAlt />
            </IconWrapper>
            <h1>Prototyping & Wireframing</h1>
            <p>
              I design responsive prototypes and wireframes using Figma and
              Adobe Creative Suite, ensuring seamless experiences across
              devices.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
