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
          {/* <p>My name is Anish Joglekar.</p> */}
          <p>
            I'm Anish Joglekar, a passionate Product Designer dedicated to
            creating user-centered digital experiences that solve real problems.
            I recently graduated from Arizona State University with a degree in
            Graphic Information Technology, where I developed a strong
            foundation in design principles, user research, and interactive
            design.
          </p>
          <p>
            My approach to design is rooted in empathy and user research. I
            believe great products are born from understanding users' needs,
            pain points, and behaviors. Through my work, I've designed intuitive
            interfaces for e-commerce platforms, responsive media applications,
            and interactive web experiences—each solution carefully crafted
            through research, ideation, prototyping, and iterative refinement.
          </p>

          <p>
            What sets me apart is my ability to bridge design thinking with
            technical feasibility. With hands-on experience in design tools like
            Figma and Adobe Creative Suite, combined with my understanding of
            front-end development (HTML, CSS, JavaScript), I create designs that
            are not only beautiful and user-friendly but also practical and
            implementable. I thrive on collaborative environments where I can
            work closely with developers, product managers, and stakeholders to
            bring ideas to life.
          </p>

          <p>
            I'm actively seeking opportunities to contribute to innovative teams
            where I can leverage my design skills to create meaningful products
            that delight users and drive business outcomes. Let's design
            something amazing together.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
