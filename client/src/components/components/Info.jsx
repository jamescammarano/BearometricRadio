import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/client';
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"
import AlbumInfoPanel from './AlbumInfoPanel';

const Info = () => {
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

    const data = GetCharts("disco")



    const randomizer = (data, count) => {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
      let i = 0
      while( i < count){
        i+=1
        const selector = getRandomInt(50)
        tabsArray.push(data[selector])
      }
    }
    
    randomizer(data.album, 5)

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
