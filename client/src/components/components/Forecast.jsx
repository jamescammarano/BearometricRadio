import React from "react";
import background from "../../assets/img/papabear.png";

const Forecast = ({ weatherReport }) => {
  const { feelsLike, temp, description } = weatherReport;
  return (
    <div className="forecast-container">
      <h2>Forecast</h2>
      <p>Feels Like: {feelsLike}°C </p>
      <p>Temp: {temp}°C</p>
      <p>Description: {description}</p>
      
    </div>
  );
};

export default Forecast;
