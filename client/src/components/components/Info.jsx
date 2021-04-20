import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/client';
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"
import AlbumInfoPanel from './AlbumInfoPanel';
import ArtistInfoPanel from './ArtistInfoPanel';

const Info = () => {
  const [artistAlbumToggle, setArtistAlbumToggle] = useState(true)
  let tabsArray = []
  
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

    const randomizer = (data, count) => {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
      let i = 0
      while( i < count){
        i+=1
        const selector = getRandomInt(50)
        // clear tabsArray here
        tabsArray.push(data[selector])
      }
    }
    let tabs;
    let panels;
    const data = GetCharts("disco")

    if(artistAlbumToggle === true){
      randomizer(data.album, 5)
      tabs = tabsArray.map((tab)=> {
        return(
            <Tab>
              <p>{tab.name} - {tab.artistName}</p>
            </Tab>
            )
          }
        )

      panels = tabsArray.map((panel) => {
        return(
            <TabPanel>
              <AlbumInfoPanel
                albumInfo={panel}  />
            </TabPanel>
          )
        }
      )
    }else{
      randomizer(data.artist, 5)
      tabs = tabsArray.map((tab)=> {
        return(
            <Tab>
              <p>{tab.name}</p>
            </Tab>
            )
          }
        )
      panels = tabsArray.map((panel) => {
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
          <button onClick={onClickToggle}>Artist/Album Toggle</button>
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
