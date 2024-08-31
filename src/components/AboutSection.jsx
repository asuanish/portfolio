import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "./styles/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile-pic.png" alt="Anish Joglekar" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>My name is Anish Joglekar.</p>
          <p>
            I was born in the bay area and moved to Arizona to attend Arizona
            State University. I am currently a senior at ASU and will receive my
            degree in Graphic Information Technology Full-Stack Web Development
            in early 2025.
          </p>
          <p>
            I'm excited about the future of web development and the endless
            possibilities it holds. Thank you for taking the time to get to know
            me. I'm eager to contribute my skills and experience to your team
            and help drive your projects to success.
          </p>

          <p>
            I have built beautiful application in several of my courses which
            I'm very proud to share here.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
