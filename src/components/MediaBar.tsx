import React from "react";

import "./styles/MediaBar.scss";

import dribbble_logo from "../assets/icons/dribbble-brands.svg";
import github_logo from "../assets/icons/github-brands.svg";
import insta_logo from "../assets/icons/instagram-brands.svg";
import linkedin_logo from "../assets/icons/linkedin-in-brands.svg";
import youtube_logo from "../assets/icons/youtube-brands.svg";

const MediaBar: React.FC = () => {
  const sosialMedia: Array<Object> = [
    {
      name: "dribbble",
      logo: dribbble_logo,
      url: "https://dribbble.com/JesperBry",
    },
    {
      name: "instagram",
      logo: insta_logo,
      url: "https://instagram.com/jesperbry/",
    },
    {
      name: "linkedin",
      logo: linkedin_logo,
      url: "https://linkedin.com/in/jesperbrynildsen",
    },
    {
      name: "github",
      logo: github_logo,
      url: "https://github.com/JesperBry",
    },
    {
      name: "youtube",
      logo: youtube_logo,
      url: "https://youtube.com/channel/UCTwKP9Qsc_nqwqXOUeFC6jg",
    },
  ];

  const mediaList: any = sosialMedia.map((media) => {
    return (
      <a
        href={(media as any).url}
        key={(media as any).name}
        className="sosial_media_icon"
      >
        <img src={(media as any).logo} alt={(media as any).name} />
      </a>
    );
  });

  return <div className="iconBar">{mediaList}</div>;
};

export default MediaBar;
