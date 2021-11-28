import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/HERO.jpg";
import Squid from "../assets/SQUID.png";
import Game from "../assets/GAME.png";
import { backgroundColor } from "../utils/colors";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="navbar">
        <div className="brand">
          <div className="circle pink"></div>
          <div className="triangle white">
            <div className="inner"></div>
          </div>
          <div className="square pink"></div>
        </div>
        <ul className="links">
          <li>
            <a href="#info">Info</a>
          </li>
          <li>
            <a href="#episodes">Episodes</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#details">Details</a>
          </li>
        </ul>
      </div>
      <div className="image">
        <img src={HeroImage} alt="Hero Image" />
        <div className="title">
          <img src={Squid} alt="" />
          <img src={Game} alt="" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  .navbar {
    margin: 3rem 0 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      &:hover {
        .circle,
        .square {
          border-color: white;
        }
        .triangle {
          border-bottom-color: #f72585;
        }
      }
      .circle {
        height: 3rem;
        width: 3rem;
        border: 5px solid #f72585;
        border-radius: 2rem;
        transition: 0.8s ease-in-out;
      }
      .triangle {
        border-left: 2rem solid transparent;
        border-right: 2rem solid transparent;
        border-bottom: 3.4rem solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.8s ease-in-out;
        position: relative;
        .inner {
          border-left: 1.5rem solid transparent;
          border-right: 1.5rem solid transparent;
          border-bottom: 2.8rem solid ${backgroundColor};
          position: absolute;
          top: 0.4rem;
        }
      }
      .square {
        height: 2.8rem;
        width: 2.8rem;
        transition: 0.8s ease-in-out;
        border: 5px solid #f72585;
      }
    }
    .links {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      li {
        a {
          text-decoration: none;
          color: #8f8f8f;
          text-transform: uppercase;
          font-size: 2rem;
          letter-spacing: 0.2rem;
          &:hover {
            color: white;
          }
        }
        &:first-of-type {
          a {
            color: white;
          }
        }
      }
    }
  }
  .image {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
      position: absolute;
      bottom: 10px;
      left: -5rem;
      z-index: 10;
      img {
        width: 45vh;
        object-fit: contain;
        &:nth-of-type(1) {
          position: absolute;
          right: 9vw;
          bottom: 6vw;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: block;
    margin: 0 5vw;
    margin-top: 5vh;
    .navbar {
      display: none;
    }
    .image {
      position: initial;
      display: flex;
      flex-direction: column;
      gap: 5vh;
      .title {
        position: initial;
        img {
          position: initial !important;
        }
      }
    }
  }
`;
