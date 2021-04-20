import React from 'react'

const ArtistInfoPanel = (artistInfo) => {
    return (
        <div>
            <h2><a href={artistInfo.artistInfo.url}>{artistInfo.artistInfo.name}</a></h2>
            <div><img alt="Artist Imare" src={artistInfo.artistInfo.image}/></div>
        </div>
    )
}

export default ArtistInfoPanel
