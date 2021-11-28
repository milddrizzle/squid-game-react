import React from "react";
import styled from "styled-components";
import { blue } from "../utils/colors";
export default function Info() {
  return (
    <Section id="info" className="defaultMargin">
      <div className="square"></div>
      <div className="info">
        <div className="title">
          <ul>
            <li>2021</li>
            <li>18+</li>
            <li>1 Season</li>
            <li>TV Dramas</li>
          </ul>
        </div>
        <div className="details">
          <p className="border-top">
            Hundreds of cash-strapped players accept a strange invitation to
            compete in children's games. Inside, a tempting prize awaits — with
            deadly high stakes.
          </p>
          <div className="border-top">
            <p>Starring</p>
            <ul>
              <li>Lee Jung-jae</li>
              <li>Park Hae-soo</li>
              <li>Wi Ha-jun</li>
            </ul>
          </div>
          <div className="border-top">
            <p>Creators</p>
            <ul>
              <li>Hwang Dong-hyuk</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  color: #c0c0c0;
  .square {
    height: 7rem;
    width: 7rem;
    border: 14px solid ${blue};
    margin: 5rem 0 0 5rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .title {
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        li {
          border-right: 1px solid #c0c0c0;
          padding-right: 2rem;
          &:last-of-type {
            border: none;
            padding: 0;
          }
        }
      }
    }
    .details {
      .border-top {
        border-top: 0.03rem solid #c0c0c0;
        padding: 2rem 0;
        display: flex;
        align-items: center;
      }
      p {
        width: 60%;
      }
      div {
        width: 60%;
        display: flex;
        ul {
          list-style-type: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: block;
    margin: 0 5vw;
    .info {
      .title {
        ul {
          gap: 3vw;
          li {
            padding-right: 1rem;
            white-space: nowrap;
          }
        }
      }
      .details {
        p,div {
          width: 100%;
      }
      div {
        p {
          width: 50%;
        }
      }

    }
  }
`;
