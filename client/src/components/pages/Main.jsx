import { useQuery } from '@apollo/client';
import React from 'react'
import Info from "../components/Info"
import "../../assets/css/style.css"
import {GET_WEATHER} from "../../helpers/queries/weather"
import Forecast from "../components/Forecast"

const Main = () => {
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

    const weather = GetWeather(1.5, 1.5)

    return (
        <div className="wrapper">
            <div className="inner">
                <div >{weather}</div>
                <div>Forecast</div>
            </div>
            <div id="wizard" role="application" className="wizard clearfix">
                <div className="content clearfix">
                    <Info />
                </div>
            </div>
		</div>
    )
}

export default Main
