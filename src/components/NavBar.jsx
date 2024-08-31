import { useState } from "react";
import { NavItems } from "../data/NavItems";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "./styles/Nav.styled";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import useScrollDirection from "../hooks/useScrollDirection";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png" />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img
                        src="./images/profile-pic.png"
                        alt="Anish Joglekar"
                      />
                      <span>Anish Joglekar</span>
                    </Profile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://www.linkedin.com/in/anishjoshuajoglekar/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    {/* <NavLink
                      href="https://jsfiddle.net/user/fiddles/public/"
                      target="_blank"
                    >
                      <TfiJsfiddle />
                    </NavLink> */}
                    <NavLink href="https://github.com/asuanish" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
