import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage
} from "./styles/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile-pic.jpg" alt="Anish Joglekar" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>My name is Anish Joglekar.</p>
          <p>
            I'm <strong>Anish Joglekar</strong>, a passionate{" "}
            <strong>Product Designer</strong> dedicated to creating
            user-creating user-centered digital experiences that solve real
            problems. I recently graduated from{" "}
            <strong>Arizona State University</strong> with a degree in Graphic
            Information Technology, where I developed a strong foundation in
            design principles, user research, and interactive design.
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
