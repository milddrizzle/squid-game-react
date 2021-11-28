import React from "react";
import styled from "styled-components";
import Episode1 from "../assets/EPISODE1.jpg";
import Episode2 from "../assets/EPISODE2.jpg";
import Episode3 from "../assets/EPISODE3.jpg";
import Episode4 from "../assets/EPISODE4.jpg";
import Episode5 from "../assets/EPISODE5.jpg";
import Episode6 from "../assets/EPISODE6.jpg";
import Episode7 from "../assets/EPISODE7.jpg";
import Episode8 from "../assets/EPISODE8.jpg";
import Episode9 from "../assets/EPISODE9.jpg";
import EpisodesImage from "../assets/EPISODES.png";
import { blue, pink, backgroundColor } from "../utils/colors";
export default function Episodes() {
  const episodesData = [
    {
      episodeName: "1. Red Light, Green Light",
      episodeInfo:
        "Hoping to win easy money, a broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold.",
      episodeImage: Episode1,
    },
    {
      episodeName: "2. Hell",
      episodeInfo:
        "Split on whether to continue or quit, the group holds a vote. But their realities in the outside world may prove to be just as unforgiving as the game.",
      episodeImage: Episode2,
    },
    {
      episodeName: "3. The Man with the Umbrella",
      episodeInfo:
        "A few players enter the next round — which promises equal doses of sweet and deadly — with hidden advantages. Meanwhile, Jun-ho sneaks his way inside.",
      episodeImage: Episode3,
    },
    {
      episodeName: "4. Stick to the Team",
      episodeInfo:
        "As alliances form among the players, no one is safe in the dorm after lights-out. The third game challenges Gi-hun's team to think strategically.",
      episodeImage: Episode4,
    },
    {
      episodeName: "5. A Fair World",
      episodeInfo:
        "Gi-hun and his team take turns keeping guard through the night. The masked men encounter trouble with their co-conspirators.",
      episodeImage: Episode5,
    },
    {
      episodeName: "6. Gganbu",
      episodeInfo:
        "Players pair off for the fourth game. Gi-hun grapples with a moral dilemma, Sang-woo chooses self-preservation and Sae-byeok shares her untold story.",
      episodeImage: Episode6,
    },
    {
      episodeName: "7. VIPS",
      episodeInfo:
        "The Masked Leader welcomes VIP guests to the facility for a front-row viewing of the show. In the fifth game, some players crack under pressure.",
      episodeImage: Episode7,
    },

    {
      episodeName: "8. Front Man",
      episodeInfo:
        "Ahead of the last round, distrust and disgust run deep among the finalists. Jun-ho makes a getaway, determined to expose the game's dirty secrets.",
      episodeImage: Episode8,
    },
    {
      episodeName: "9. One Lucky Day",
      episodeInfo:
        "The final round presents another cruel test — but this time, how it ends depends on just one player. The game's creator steps out of the shadows.",
      episodeImage: Episode9,
    },
  ];
  const getEpisodeMarkdown = (data, number) => {
    return (
      <div className={`episode episode-${number}`}>
        <div className="image">
          <img src={data.episodeImage} alt="" />
        </div>
        <h3>{data.episodeName}</h3>
        <p>{data.episodeInfo}</p>
      </div>
    );
  };
  return (
    <Section id="episodes" className="defaultMargin">
      <div className="title">
        <img src={EpisodesImage} alt="Episodes " />
        <div className="circle"></div>
      </div>
      <div className="episodes">
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[0], 1)}
          {getEpisodeMarkdown(episodesData[1], 2)}
          {getEpisodeMarkdown(episodesData[2], 3)}
        </div>
        <div className="episodes__grid">
          <div className="square"></div>
          {getEpisodeMarkdown(episodesData[3], 4)}
          {getEpisodeMarkdown(episodesData[4], 5)}
        </div>
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[5], 6)}
          {getEpisodeMarkdown(episodesData[6], 7)}
          <div className="square"></div>
        </div>
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[7], 8)}
          <div></div>
          {getEpisodeMarkdown(episodesData[8], 9)}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  margin: 0vw 5vw;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh;
    position: relative;
    .circle {
      height: 8rem;
      width: 8rem;
      border: 10px solid #f72585;
      border-radius: 10rem;
      position: absolute;
      right: 10%;
    }
  }
  .episodes {
    display: flex;
    flex-direction: column;

    gap: 8rem;
    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
      color: white;

      .square {
        height: 8rem;
        width: 8em;
        border: 10px solid ${blue};
        margin-left: 3rem;
        margin-top: 10rem;
      }

      .episode {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 2em;
        h3 {
          letter-spacing: 0.1rem;
        }
        p {
          color: #c0c0c0;
          font-weight: 300;
          letter-spacing: 0.05rem;
          text-align: justify;
        }
        .image {
          max-height: 15rem;
          overflow: hidden;
          img {
            height: 15rem;
            transition: 0.5s ease-in-out;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
        &-2,
        &-4,
        &-6 {
          .image {
            max-height: 25rem;
            max-width: 25rem;
            overflow: hidden;
            img {
              height: 25rem;
              width: 25rem;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    .title {
      width: 100%;
      margin: 0 0 7vh 0;
      img {
        width: 100%;
      }
    }
    .episodes {
      gap: 2vh;
      &__grid {
        display: block;
        .episode {
          margin-bottom: 3vh;
          gap: 3vh;
          .image {
            img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;
