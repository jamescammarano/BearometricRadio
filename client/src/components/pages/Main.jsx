import { useQuery } from '@apollo/client';
import React from 'react'
import Info from "../components/Info"
import "../../assets/css/style.css"
import {GET_WEATHER} from "../../helpers/queries/weather"
import {GET_LASTFM_CHARTS} from "../../helpers/queries/lastFm"
import Forecast from "../components/Forecast"

const Main = () => {
    let artists = []
    let albums = []

    const GetWeather = (lat, lon) => {
        const { loading, error, data } = useQuery(GET_WEATHER, {
            variables: { lat, lon },
            }
        ) 
        if (loading) {return 'Loading...';}
        if (error) {return `Error! ${error.message}`}
        console.log(data.weatherReport.feelsLike)
        return (
            <Forecast 
            weatherReport={data.weatherReport}
            />
        )
    }
    const GetCharts = (tag) => {
        const { loading, error, data } = useQuery(GET_LASTFM_CHARTS, {
          variables: { tag },
            }
          ) 
          if (loading) {return 'Loading...';}
          if (error) {return `Error! ${error.message}`}
    
          randomizer(data.album, 6, albums)
          randomizer(data.artist, 6, artists)
    
          return data
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
  
    const weather = GetWeather(1.5, 1.5)
    const data = GetCharts("disco")

    return (
        <div className="inner">
          <div >{weather}</div>
          <div>Forecast</div>
          <Info albums={albums} artists={artists}/>
        </div>
    )
}

export default Main