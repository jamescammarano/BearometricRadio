import React from 'react'

const ArtistInfoPanel = (artistInfo) => {
    return (
        <div id="artist-info">
            <h2><a href={artistInfo.artistInfo.url}>{artistInfo.artistInfo.artistsName}</a></h2>
            <div><img alt="Artist" src={artistInfo.artistInfo.image}/></div>
        </div>
    )
}

export default ArtistInfoPanel
