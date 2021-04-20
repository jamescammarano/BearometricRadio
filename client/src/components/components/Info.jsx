import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/client';
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"
import AlbumInfoPanel from './AlbumInfoPanel';
import ArtistInfoPanel from './ArtistInfoPanel';

const Info = () => {
  const [artistAlbumToggle, setArtistAlbumToggle] = useState(true)
  let artists = []
  let albums = []
  const GetCharts = (tag) => {
    const { loading, error, data } = useQuery(GET_LASTFM_CHARTS, {
      variables: { tag },
        }
      ) 
      if (loading) {return 'Loading...';}
      if (error) {return `Error! ${error.message}`}
      return data
    }

    const onClickToggle = () => {
      setArtistAlbumToggle(!artistAlbumToggle)
    }

    const randomizer = (data, count, artistOrAlbum) => {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
      let i = 0
      while( i < count){
        i+=1
        const selector = getRandomInt(50)
        // clear tabsArray here
        artistOrAlbum.push(data[selector])
      }
    }
 
    let tabs;
    let panels;
    const data = GetCharts("disco")
      
    if(artistAlbumToggle === true && data.album){
      randomizer(data.album, 5, albums)
      tabs = albums.map((tab)=> {
        return(
            <Tab>
              <p>{tab.name} - {tab.artistName}</p>
            </Tab>
            )
          }
        )

      panels = albums.map((panel) => {
        return(
            <TabPanel>
              <AlbumInfoPanel
                name={panel.name}
                url={panel.url}
                image={panel.image}
                artistName={panel.artistName}
              />
            </TabPanel>
          )
        }
      )
    }
    else if(!data.album){
      tabs = (
        <Tab>
          <p>Sharptooth - Mean Brain</p>
        </Tab>
      )
      panels =(
        <TabPanel>
          <AlbumInfoPanel 
            name="Mean Brain" 
            image="" 
            url="https://www.last.fm/music/Sharptooth" 
            artistName="Sharptooth" 
          />
        </TabPanel>)
      // Sharptooth when data not found (for now) 
    }
    else{
      randomizer(data.album, 5, albums)
      tabs = artists.map((tab)=> {
        return(
            <Tab>
              <p>{tab.name}</p>
            </Tab>
            )
          }
        )
      panels = artists.map((panel) => {
        return(
            <TabPanel> 
              <ArtistInfoPanel
                artistInfo={panel}  />
            </TabPanel>
          )
        }
      )
    }

    return (
        <div className="steps clearfix">
          <button onClick={onClickToggle}>Toggle</button>
          <Tabs>
            <TabList>
              {tabs}
            </TabList>
            {panels}
          </Tabs>
        </div>

    )
}

export default Info
