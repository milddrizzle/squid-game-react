import React from "react";
import styled from "styled-components";
import { fontLightColor } from "../utils/colors";
export default function Footer() {
  return (
    <FooterContainer className="defaultMargin">
      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Help Centre</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Media Centre</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Ways to Watch</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Speed Test</a>
        </li>
        <li>
          <a href="#">Legal Notices</a>
        </li>
        <li>
          <a href="#">Only on Netflix</a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${fontLightColor};
  margin: 0 5rem;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 18rem;
    row-gap: 2rem;
    list-style-type: none;
    li {
      a {
        text-transform: uppercase;
        color: ${fontLightColor};
        text-decoration: none;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    ul {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;
