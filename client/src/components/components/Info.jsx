import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Info = () => {
    const tabsArray = [{tab: "1"},{tab: "2"},{tab: "3"},{tab: "4"}]
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
