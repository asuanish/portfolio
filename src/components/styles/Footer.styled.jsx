import styled from "styled-components";

export const SyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FooterNav = styled.div`
  a {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin: 0;
  }
`;
