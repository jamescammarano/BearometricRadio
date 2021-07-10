import React from 'react';

const ArtistInfoPanel = (artistInfo) => {
  return (
    <div id="artist-info m-auto text-center">
      <h2>
        <a
          className="text-xl font-bold text-purple-400"
          href={artistInfo.artistInfo.url}
        >
          {artistInfo.artistInfo.name}
        </a>
      </h2>
    </div>
  );
};

export default ArtistInfoPanel;
