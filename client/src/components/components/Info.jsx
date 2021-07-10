import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AlbumInfoPanel from './AlbumInfoPanel';
import ArtistInfoPanel from './ArtistInfoPanel';

const Info = ({ albums, artists }) => {
  const [artistAlbumToggle, setArtistAlbumToggle] = useState(true);

  const onClickToggle = () => {
    setArtistAlbumToggle(!artistAlbumToggle);
  };

  let tabs;
  let panels;

  if (artistAlbumToggle === true && albums.length > 0) {
    tabs = albums.map((tab) => {
      return (
        <Tab>
          <p>
            {tab.name} - {tab.artistName}
          </p>
        </Tab>
      );
    });
    panels = albums.map((panel) => {
      return (
        <TabPanel>
          <AlbumInfoPanel
            name={panel.name}
            url={panel.url}
            image={panel.image}
            artistName={panel.artistName}
          />
        </TabPanel>
      );
    });
  } else if (albums.length === 0) {
    tabs = (
      <Tab>
        <p>Mean Brain by Sharptooth</p>
      </Tab>
    );
    panels = (
      <TabPanel>
        <AlbumInfoPanel
          name="Mean Brain"
          image=""
          url="https://www.last.fm/music/Sharptooth"
          artistName="Sharptooth"
          onClickToggle={onClickToggle}
        />
      </TabPanel>
    );
  } else {
    tabs = artists.map((tab) => {
      return (
        <Tab>
          <p>{tab.name}</p>
        </Tab>
      );
    });
    panels = artists.map((panel) => {
      return (
        <TabPanel>
          <ArtistInfoPanel artistInfo={panel} />
        </TabPanel>
      );
    });
  }

  return (
    <div className="">
      <Tabs>
        <TabList>{tabs}</TabList>
        {panels}
        <button
          className="hover:bg-purple-400 text-white hover:text-black"
          onClick={onClickToggle}
        >
          Toggle View
        </button>
      </Tabs>
    </div>
  );
};

export default Info;
