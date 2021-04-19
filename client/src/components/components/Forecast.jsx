import React from 'react'

const Forecast = ({weatherReport}) => {
    const {feelsLike, temp, units, description} = weatherReport
    return (
        <div>
            <p>Feels Like: {feelsLike}</p>
            <p>Temp: {temp}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default Forecast
