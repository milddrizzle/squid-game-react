import React from "react";
import styled from "styled-components";
import Video from "../assets/VIDEOS.png";
import Video1 from "../assets/VIDEO1.jpg";
import Video2 from "../assets/VIDEO2.jpg";
import { blue, pink, fontLightColor } from "../utils/colors";
import { FaPlay } from "react-icons/fa";
export default function Videos() {
  return (
    <Section className="defaultMargin" id="videos">
      <div className="title">
        <img src={Video} alt="Video Title" />
      </div>
      <div className="videos">
        <div className="video">
          <div className="circle blue"></div>
          <div className="container">
            <img src={Video1} alt="Video 1" />
            <div className="info">
              <p>Season 1 Trailer : Squid Game</p>
              <div className="icon">
                <FaPlay />
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="container">
            <img src={Video2} alt="Video 2" />
            <div className="info">
              <p>Season 2 Trailer : Squid Game</p>
              <div className="icon">
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="square pink"></div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5rem;
  .title {
    text-align: center;
    margin: 2rem 0;
  }
  .videos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .video {
      display: grid;
      grid-template-columns: 40% 60%;
      &:nth-of-type(2) {
        grid-template-columns: 60% 40%;
      }
      .container {
        img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }
        .info {
          display: flex;
          align-items: center;
          gap: 7rem;
          margin-top: 1rem;
          color: ${fontLightColor};
          p {
            font-size: 1.4rem;
          }
          .icon {
            cursor: pointer;
          }
        }
      }
      .square,
      .circle {
        height: 12rem;
        width: 12em;
        border: 12px solid ${blue};
        margin-left: 10rem;
        margin-top: 5rem;
      }
      .circle {
        border-radius: 12rem;
        border-color: ${pink};
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    .title {
      img {
        width: 100%;
      }
    }
    .videos {
      .video {
        display: block;
        .container {
          .info {
            flex-direction: column;
            gap: 1rem;
          }
        }
      }
    }
  }
`;
