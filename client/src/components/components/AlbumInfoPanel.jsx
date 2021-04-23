import React from "react";

const AlbumInfoPanel = ({ name, url, image, artistName }) => {
  return (
    <div id="album-info">
      <a href={url}>
        <img alt="cover" src={image} />
      </a>
    </div>  
  );
};

export default AlbumInfoPanel;
