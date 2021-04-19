import React from 'react'

const Forecast = ({weatherReport}) => {
    const {feelsLike, temp, units, description} = weatherReport
    return (
        <div>
            {feelsLike}
            {temp}
            {units}
            {description}
        </div>
    )
}

export default Forecast