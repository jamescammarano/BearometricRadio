import React from 'react';

const AlbumInfoPanel = ({ name, url, image, artistName }) => {
  return (
    <div className="m-auto">
      <h2 className="text-xl font-bold">
        {name} By{' '}
        <a className="my-3 text-purple-400" href={url}>
          {artistName}
        </a>
      </h2>
      <div className="m-auto my-3">
        <img alt="cover" src={image} />
      </div>
    </div>
  );
};

export default AlbumInfoPanel;
