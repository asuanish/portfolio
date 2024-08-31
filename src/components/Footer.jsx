import { FooterNav, SyledFooter } from "./styles/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <SyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <div>
          &copy; {months[new Date().getMonth()]} {new Date().getFullYear()}
        </div>
      </SyledFooter>
    </>
  );
};
