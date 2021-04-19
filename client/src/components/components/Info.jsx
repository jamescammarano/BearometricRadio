import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/client';
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"
import AlbumInfoPanel from './AlbumInfoPanel';

const Info = () => {
  let tabsArray = [{
    "artistName": "BTS",
    "image": "https://lastfm.freetls.fastly.net/i/u/174s/88188455b6b1d562c6db01e24f725165.png",
    "name": "Dynamite",
    "url": "https://www.last.fm/music/BTS"
  },
  {
    "artistName": "BTS",
    "image": "https://lastfm.freetls.fastly.net/i/u/174s/0e41a35afb8e2ad81aca9621d420a33f.png",
    "name": "Dynamite (Extended)",
    "url": "https://www.last.fm/music/BTS"
  },
  {
    "artistName": "Calvin Harris",
    "image": "https://lastfm.freetls.fastly.net/i/u/174s/a552de6f9f15614d4da59ebf8cd7f5e2.png",
    "name": "Funk Wav Bounces Vol.1",
    "url": "https://www.last.fm/music/Calvin+Harris"
  },
  {
    "artistName": "Red Velvet",
    "image": "https://lastfm.freetls.fastly.net/i/u/174s/d31c361f1d65a46ed1d6aeaa99a23b9a.png",
    "name": "The Perfect Red Velvet - The 2nd Album Repackage",
    "url": "https://www.last.fm/music/Red+Velvet"
  }]

    const GetCharts = (tag) => {
      const { loading, error, data } = useQuery(GET_LASTFM_CHARTS, {
          variables: { tag },
          }
      ) 
      if (loading) {return 'Loading...';}
      if (error) {return `Error! ${error.message}`}
      console.log(data)
    }
    const data = GetCharts("disco")

    const tabs = tabsArray.map((tab)=> {
      return(
          <Tab>
            <p>{tab.name} - {tab.artistName}</p>
          </Tab>
          )
        }
      )
      const panels = tabsArray.map((panel) => {
        return(
            <TabPanel>
              <AlbumInfoPanel
                albumInfo={panel}  />
            </TabPanel>
          )
        }
      )
    return (
        <div class="steps clearfix">
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
