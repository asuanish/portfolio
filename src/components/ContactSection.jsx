import { FaEnvelope } from "react-icons/fa";
import { SectionHeading } from "./styles/SectionHeading.styled";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection
} from "./styles/ContactSection.styled";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Hit me up!</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>Don't hesitate! Drop me a line and I’ll get back to you ASAP!</p>
            <div>
              <a href="mailto:ajjoglek@asu.edu">
                <FaEnvelope /> <span>ajjoglek@asu.edu</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/chat.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
