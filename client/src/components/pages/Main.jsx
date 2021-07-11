import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Info from '../components/Info';
import '../../assets/css/style.css';
import { GET_WEATHER } from '../../helpers/queries/weather';
import { GET_LASTFM_CHARTS } from '../../helpers/queries/lastFm';
import Forecast from '../components/Forecast';
import { tagsList } from '../../helpers/weatherToTags';
import LocationInput from '../components/LocationInput';

const Main = () => {
  let tag = 'hardcore+punk';
  let artists = [];
  let albums = [];
  const [location, setLocation] = useState({
    geocode: [{ lat: 43.6532, lng: -79.3832 }],
  });

  const GetWeather = (lat, lon) => {
    const { loading, error, data } = useQuery(GET_WEATHER, {
      variables: { lat, lon },
    });
    if (loading) {
      return 'Loading...';
    }
    if (error) {
      return `Error! ${error.message}`;
    }

    tag = tagsList[data.weatherReport.description];
    return (
      <>
        <Forecast weatherReport={data.weatherReport} genre={tag} />
      </>
    );
  };

  const GetCharts = (tag) => {
    const { loading, error, data } = useQuery(GET_LASTFM_CHARTS, {
      variables: { tag },
    });
    if (loading) {
      return 'Loading...';
    }
    if (error) {
      return `Error! ${error.message}`;
    }

    randomizer(data.album, 6, albums);
    randomizer(data.artist, 6, artists);
    if (data && data.geocode) {
      setLocation(data.geocode);
    }
    return data;
  };

  const randomizer = (data, count, artistOrAlbum) => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };
    let i = 0;
    while (i < count) {
      i += 1;
      const selector = getRandomInt(50);
      // clear tabsArray here
      artistOrAlbum.push(data[selector]);
    }
  };

  const weather = location.geocode
    ? GetWeather(location.geocode[0].lat, location.geocode[0].lng)
    : GetWeather(43.6532, -79.3832);
  GetCharts(tag);
  return (
    <div className="m-auto bg-gray-800 border-4 border-purple-500">
      <div className="flex flex-row">
        <div>
          {weather}
          <LocationInput setLocation={setLocation} />
        </div>
        <Info albums={albums} artists={artists} />
      </div>
    </div>
  );
};

export default Main;
/* */
