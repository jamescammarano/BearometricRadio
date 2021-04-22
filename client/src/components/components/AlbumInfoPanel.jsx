import React from 'react'

const AlbumInfoPanel = ({name, url, image, artistName}) => {
    return (
        <div>
            <h2 class="title">{name} By <a href={url}>{artistName}</a></h2>
            <div><img alt="cover" src={image}/></div>
        </div>
    )
}

export default AlbumInfoPanel
