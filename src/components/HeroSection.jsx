import { CTAButton } from "./styles/CTAButton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "./styles/HeroSection.styled";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Anish Joglekar</h1>
        <h3>{"{Front-End Developer}"}</h3>
        <p>JavaScript . HTML . CSS </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Contact Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          href="https://www.linkedin.com/in/anishjoshuajoglekar/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/asuanish" target="_blank">
          <FaGithub />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
