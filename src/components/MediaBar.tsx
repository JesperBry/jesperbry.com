import React from "react";

import "./styles/MediaBar.scss";

type Props = {
  mediaArr: Array<Object>;
};

const MediaBar: React.FC<Props> = (props) => {
  const mediaList: JSX.Element[] = props.mediaArr.map((media) => {
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
