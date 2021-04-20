import { useQuery } from '@apollo/client';
import React, {useState, useEffect} from 'react'
import Info from "../components/Info"
import "../../assets/css/style.css"
import {GET_WEATHER} from "../../helpers/queries/weather"
import Forecast from "../components/Forecast"
import { tagsList } from "../../helpers/weatherToTags"

const Main = () => {
    const [tag, setTag] = useState("disco")

    const GetWeather = (lat, lon) => {
        const { loading, error, data } = useQuery(GET_WEATHER, {
            variables: { lat, lon },
            }
        ) 
        if (loading) {return 'Loading...';}
        if (error) {return `Error! ${error.message}`}

        return (
            <Forecast 
            weatherReport={data.weatherReport}
            />
        )
    }

    const weather = GetWeather(1.5, 1.5)

    useEffect(() => {
        console.log(weather.description)
        setTag(tagsList[weather.description])
    }, [weather])

    
    return (
        <div className="wrapper">
            <div className="inner">
                <div >{weather}</div>
                <div>Forecast</div>
            </div>
            <div id="wizard" role="application" className="wizard clearfix">
                <div className="content clearfix">
                    <Info tag={tag} />
                </div>
            </div>
		</div>
    )
}

export default Main
