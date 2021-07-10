import React from 'react';

const AlbumInfoPanel = ({ name, url, image, artistName }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">
        {name} By{' '}
        <a className="text-purple-400" href={url}>
          {artistName}
        </a>
      </h2>
      <div>
        <img alt="cover" src={image} />
      </div>
    </div>
  );
};

export default AlbumInfoPanel;
