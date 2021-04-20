import React from 'react'

const AlbumInfoPanel = (albumInfo) => {
    return (
        <div>
            <h2>{albumInfo.albumInfo.name} By {albumInfo.albumInfo.artistName}</h2>
            <div><img alt="cover" src={albumInfo.albumInfo.image}/></div>
        </div>
    )
}

export default AlbumInfoPanel
