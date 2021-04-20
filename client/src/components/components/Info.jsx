import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/client';
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"

const Info = (tag) => {
  let tabsArray = [{tab: "1"},{tab: "3"},{tab: "4"},{tab: "5"}]

    const GetCharts = (tag) => {
      const { loading, error, data } = useQuery(GET_LASTFM_CHARTS, {
          variables: { tag },
          }
      ) 
      if (loading) {return 'Loading...';}
      if (error) {return `Error! ${error.message}`}
      console.log(data)
    }
    const data = GetCharts(tag)

    const tabs = tabsArray.map((tab)=> {
      return(
          <Tab>
            {tab.tab}
          </Tab>
          )
        }
      )
      const panels = tabsArray.map((panel) => {
        return(
            <TabPanel>
              {panel.tab}
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
