import React from "react";

import "../styles/Anime.css";
const Anime = (props) => {
  let image_url = props.image_url;
  let title = props.title;

  return (
    <div className="anime-card">
      <img src={image_url} alt={title} className="anime-img" />
      <h4 className="anime-title">{title}</h4>
    </div>
  );
};

export default Anime;
