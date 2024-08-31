import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { TopBanner } from "./components/TopBanner";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Globals.styled";

function App() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255,1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158,1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51,153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
