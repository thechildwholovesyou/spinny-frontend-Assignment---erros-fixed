import React from "react";

const Anime = (props) => {
  let image_url = props.image_url;
  let title = props.title;

  return (
    <div className="anime-card">
      <img src={image_url} alt={title} className="anime-img" />
      <p className="anime-title">{title}</p>
    </div>
  );
};

export default Anime;